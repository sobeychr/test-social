require('colors');
require('./env');

const fs = require('fs');
const pathData = __dirname + '/data/';
const { json, html, text } = require('./response');

const { SERVER_PORT } = process.env;

const express = require('express');
const app = express();
const port = SERVER_PORT || 3000;

app.get('/healthcheck', (req, res) => {
    text(res, 'ok');
});

app.get('/json', (req, res) => {
    const testJson = JSON.parse(
        fs.readFileSync(pathData + 'test.json', 'utf8'),
    );
    json(res, testJson);
});

app.get('/html', (req, res) => {
    const testHtml = fs.readFileSync(pathData + 'test.html', 'utf8');
    html(res, testHtml);
});

app.listen(port, () => {
    console.log('Now listening to'.white, `localhost:${port}`.magenta);
});
