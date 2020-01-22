const { json, text } = require('./contentType');
const uuid = require('uuid/v4');

const secrets = require('./../data/secrets.json');
const users = require('./../data/users.json');

const findSecret = secret => secrets.find(entry => entry.secret === secret);
const findUser = ({ password, token, username }) =>
    users.find(
        entry =>
            (token && token === entry.token) ||
            (username &&
                username === entry.username &&
                password &&
                password === entry.password),
    );

module.exports = app => {
    app.options('/login/auth', (req, res) => {
        text(res, 'ok');
    });

    app.post('/login/auth', (req, res, next) => {
        const {
            body: { secret, token, username },
        } = req;
        const found = findSecret(secret);

        if (found && (token || username)) {
            next();
        }
        else {
            res.status(401)
                .send('401: Unauthorized')
                .end();
        }
    });
    app.post('/login/auth', (req, res) => {
        const { body } = req;

        const user = findUser(body);
        if (user) {
            json(res, {
                token: user.token,
                username: user.username,
            });
        }
        else {
            res.status(401)
                .send('401: Unauthorized')
                .end();
        }
    });

    app.get('/login/secret', (req, res) => {
        const time = Date.now();

        const rep = {
            time,
            secret: uuid(),
        };
        secrets.push(rep);

        json(res, rep);
    });
};
