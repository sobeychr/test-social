require('colors');
require('./env');

const { SERVER_PORT } = process.env;

const express = require('express');
const app = express();
const port = SERVER_PORT || 3000;

require('./response/middleware')(app);
require('./response/basic')(app);
require('./response/notFound')(app);

app.listen(port, () => {
    console.log('Now listening to'.brightCyan, `localhost:${port}`.magenta);
});
