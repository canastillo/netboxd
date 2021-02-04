'use strict';

const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
    ]
};
