const { json } = require('./contentType');

module.exports = app => {
    let track = 0;
    // app.post('/login', (req, res) => {
    app.get('/login', (req, res) => {
        track++;
        json(res, {
            message: 'connected',
            user: 'user-123',
            track,
        });
    });
};
