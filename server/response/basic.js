// const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');

const pathData = path.resolve(__dirname, './../data') + '/';
const pathFavicon = path.resolve(__dirname, './../image/favicon.png');
// const { json, html, text } = require('./contentType');
const { text } = require('./contentType');

module.exports = app => {
    app.use(favicon(pathFavicon));

    app.get('/favicon.png', (req, res) => {
        res.status(200).sendFile(pathFavicon);
    });

    app.get('/healthcheck', (req, res) => {
        text(res, 'ok');
    });

    app.get('/html', (req, res) => {
        // const fileHtml = fs.readFileSync(pathData + 'test.html', 'utf8');
        // html(res, fileHtml);
        res.status(200).sendFile(pathData + 'test.html');
    });

    app.get('/json', (req, res) => {
        // const fileJson = fs.readFileSync(pathData + 'test.json', 'utf8');
        // json(res, fileJson);
        res.status(200).sendFile(pathData + 'test.json');
    });

    app.get('/robots.txt', (req, res) => {
        res.status(200).sendFile(pathData + 'robots.txt');
    });

    app.get('/sitemap.txt', (req, res) => {
        res.status(200).sendFile(pathData + 'sitemap.txt');
    });
};
