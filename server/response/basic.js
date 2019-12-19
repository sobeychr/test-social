// const fs = require('fs');
const path = require('path');

const pathData = path.resolve(__dirname, './../data') + '/';
// const { json, html, text } = require('./contentType');
const { text } = require('./contentType');

module.exports = app => {
    app.get('/healthcheck', (req, res) => {
        text(res, 'ok');
    });

    app.get('/html', (req, res) => {
        // const fileHtml = fs.readFileSync(pathData + 'test.html', 'utf8');
        // html(res, fileHtml);
        res.sendFile(pathData + 'test.html');
    });

    app.get('/json', (req, res) => {
        // const fileJson = fs.readFileSync(pathData + 'test.json', 'utf8');
        // json(res, fileJson);
        res.sendFile(pathData + 'test.json');
    });

    app.get('/robots.txt', (req, res) => {
        res.sendFile(pathData + 'robots.txt');
    });

    app.get('/sitemap.txt', (req, res) => {
        res.sendFile(pathData + 'sitemap.txt');
    });
};
