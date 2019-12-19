const charset = 'charset=utf-8';
const connection = 'Connection';
const contentLength = 'Content-Length';
const contentType = 'Content-Type';

const json = (res, data) => {
    res.set({
        [connection]: 'close',
        [contentLength]: JSON.stringify(data).length,
        [contentType]: `application/json; ${charset}`,
    })
        .status(200)
        .send(data)
        .end();
};

const html = (res, text) => {
    res.set({
        [connection]: 'close',
        [contentLength]: text.length,
        [contentType]: `text/html; ${charset}`,
    })
        .status(200)
        .send(text)
        .end();
};

const text = (res, text) => {
    res.set({
        [connection]: 'close',
        [contentLength]: text.length,
        [contentType]: `text/plain; ${charset}`,
    })
        .status(200)
        .send(text)
        .end();
};

module.exports = {
    json,
    html,
    text,
};
