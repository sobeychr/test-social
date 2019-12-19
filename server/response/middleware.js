require('colors');
const responseTime = require('response-time');

module.exports = app => {
    app.use(
        responseTime((req, res, time) => {
            const { method, url } = req;
            console.log(
                '>>'.yellow,
                'responded in'.white,
                `${time.toFixed(4)}ms`.brightCyan,
                `${res.statusCode}`.magenta,
                `${method}`.green,
                `${url}`.magenta,
            );
        }),
    );
};
