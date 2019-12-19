module.exports = app => {
    app.use((req, res) => {
        res.status(404)
            .send('404: Page not found')
            .end();
    });
};
