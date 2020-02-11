const { json } = require('./contentType');

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

const filterEventKeys = list => list.map(entry => ({
    id: entry.id,
    name: entry.name,
    title: entry.title,
    short: entry.short,
    tag: entry.tag,
    thumbnail: entry.thumbnail,
    start: entry.start,
}));

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

    app.get('/event/list/:date/:limit', (req, res) => {
        const date = parseInt(req.params.date, 10);
        const limit = parseInt(req.params.limit, 10);
        const list = filterEventKeys(events)
            .filter(entry => entry.start >= date)
            .slice(0, limit);
        json(res, list);
    });

    /*
    app.get('/event/search', (req, res) => {
        const { body: {
            label,
            tag,
        } } = req;

        if(!label && !tag) {
            res.status(400)
                .send('400: Bad Request')
                .end();
        }

        const logs = [];

        let list = events;
        logs.push(`original events list length: ${list.length}`);

        if(label) {
            list = list.filter(entry => (
                entry.title.toLowerCase().includes(label)
                || entry.short.toLowerCase().includes(label)
                || entry.description.toLowerCase().includes(label)
            ));
            logs.push(`after filtered by label: ${list.length}`);
        }

        list = filterEventKeys(events);
        json(res, list);
    });
    */

    app.get('/event/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const event = events.find(entry => entry.id === id);

        if (event) {
            json(res, event);
        } else {
            res.status(404)
                .send('404: Not found')
                .end();
        }
    });
};
