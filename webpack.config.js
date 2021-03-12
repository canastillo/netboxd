'use strict';

const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const port = '5500'

module.exports = {
    mode: mode,
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'img',
                    name: '[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: '0.0.0.0',
        port: port,
        open: 'Firefox',
        openPage: 'http://localhost:' + port,
        watchContentBase: true
    },
    devtool: 'source-map',
    plugins: [
    ]
};
