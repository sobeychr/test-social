const { json } = require('./contentType');

const { getDate, getDescription, getTitle } = require('./../data/randomData');
const events = require('./../data/events.json');

// const findEvent = ttt => secrets.find(entry => entry.alpha === ttt);

const sortEvent = (a, b) => {
    if (a.start !== b.start) {
        return a.start - b.start;
    }
    if (a.description !== b.description) {
        return a.description < b.start ? -1 : 1;
    }
    return a.id - b.id;
};

module.exports = app => {
    app.get('/eventgen', (req, res) => {
        const list = [];

        for (let i = 0; i < 200; i++) {
            const created = Math.floor(getDate() * 0.001);
            const start = created + 60 * 60 * 24 * 10;
            const end = start + 60 * 60 * 2;

            list.push({
                id: i + 1,
                title: getTitle(),
                description: getDescription(),
                thumbnail: 'sonic-knucles.jpg',
                created,
                start,
                end,
            });
        }

        list.sort(sortEvent);

        json(res, list);
    });

    app.get('/event/list', (req, res) => {
        json(res, events);
    });
};
