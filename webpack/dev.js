require('./../script/env');
const defaultConfig = require('./config/default');
const { rootPath } = require('./config/path');

const { CLIENT_PORT } = process.env;

module.exports = {
    ...defaultConfig,

    devtool: 'source-map',
    devServer: {
        bonjour: true,
        clientLogLevel: 'info',
        compress: true,
        contentBase: rootPath + '/client',
        headers: {
            'X-Custom-Header': 'testing',
        },
        historyApiFallback: true,
        inline: true,
        host: 'localhost',
        https: false,
        open: true,
        port: CLIENT_PORT || 123,
    },

    mode: 'development',
};
