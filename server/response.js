const charset = 'charset=utf-8';
const contentLength = 'Content-Length';
const contentType = 'Content-Type';

const json = (res, data) => {
    res.set({
        [contentLength]: JSON.stringify(data).length,
        [contentType]: `application/json; ${charset}`,
    })
        .status(200)
        .send(data);
};

const html = (res, text) => {
    res.set({
        [contentLength]: text.length,
        [contentType]: `text/html; ${charset}`,
    })
        .status(200)
        .send(text);
};

const text = (res, text) => {
    res.set({
        [contentLength]: text.length,
        [contentType]: `text/plain; ${charset}`,
    })
        .status(200)
        .send(text);
};

module.exports = {
    json,
    html,
    text,
};
