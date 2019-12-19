module.exports = {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(jpe?g|gif|png|mp3|svg|txt)$/,
            loaders: ['file-loader'],
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['source-map-loader'],
            enforce: 'pre',
        },
    ],
};
