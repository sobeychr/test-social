const { json, text } = require('./contentType');
const uuid = require('uuid/v4');

const secrets = [
    {
        secret: '8ad87dc6-f628-4fdc-ae38-a945d4c5e064',
        time: 1577127756002,
    },
];

const users = [
    {
        token: 'd4fc6006-60cf-4065-938b-a9fd2dd758de',
        username: 'test-username',
        password: 'test123',
    },
    {
        token: '799d22b7-9a27-41fe-98b9-c24359b989d6',
        username: 'asd',
        password: 'asd',
    },
];

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
        } else {
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
            return;
        }

        res.status(401)
            .send('401: Unauthorized')
            .end();
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
