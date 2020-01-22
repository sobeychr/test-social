const { json } = require('./contentType');
const pick = require('lodash/pick');

const {
    getDate,
    getDescLong,
    getDescShort,
    getName,
    getTag,
    getTitle,
    getType,
    randomInt,
} = require('./../data/randomData');
const events = require('./../data/events.json');

const keysList = ['id', 'name', 'title', 'short', 'tag', 'thumbnail', 'start'];

const sortEvent = (a, b) => {
    if (a.start !== b.start) {
        return a.start - b.start;
    }
    if (a.description !== b.description) {
        return a.description < b.description ? -1 : 1;
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
            const thumbnail = `sonic-knucles-${randomInt(0, 3)}.jpg`;

            list.push({
                id: i + 1,
                name: getName(),
                title: getTitle(),
                short: getDescShort(),
                description: getDescLong(),
                tag: getTag(),
                type: getType(),
                thumbnail,
                created,
                start,
                end,
            });
        }

        list.sort(sortEvent);

        json(res, list);
    });

    app.get('/event/list', (req, res) => {
        // const now = Math.floor(Date.now() * 0.001);
        const list = events
            // .filter(entry => entry.start > now)
            .map(entry => pick(entry, keysList));
        json(res, list);
    });

    app.get('/event/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const event = events.find(entry => entry.id === id);

        if (event) {
            json(res, event);
        }
        else {
            res.status(404)
                .send('404: Not found')
                .end();
        }
    });
};
