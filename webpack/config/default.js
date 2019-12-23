const alias = require('./alias');
const modules = require('./module');
const { rootPath, srcPath } = require('./path');

module.exports = {
    entry: rootPath + '/client/src/index.jsx',
    output: {
        path: rootPath + '/client',
        filename: 'app.js',
        publicPath: 'asset/',
    },

    module: modules,

    resolve: {
        alias,
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: [srcPath, 'node_modules'],
    },
};
