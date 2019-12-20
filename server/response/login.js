const { json, text } = require('./contentType');
const uuid = require('uuid/v4');

module.exports = app => {
    const secrets = [
        {
            time: 1576869552783,
            secret: '1606209d-37e9-49a6-9b42-addf3ffd8428',
        },
    ];

    app.options('/login/auth', (req, res) => {
        text(res, 'ok');
    });
    app.post('/login/auth', (req, res) => {
        const {
            body: { username, secret },
        } = req;
        const access = secrets.find(entry => entry.secret === secret);

        json(res, {
            username,
            secret,
            access,
            secrets,
        });

        /*
        if (username && access) {
            json(res, {
                username,
                secret,
            });
        }

        res.status(401)
            .send('403: Forbidden')
            .end();
        */
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
