const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const PORT = '5500'

module.exports = {
    mode: MODE,
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // test: /\.(html)$/,
                // use: [
                //     {
                //         loader: 'html-loader',
                //         options: {
                //             // minimize: true
                //             // sources: false
                //         }
                //     }
                // ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].webp',
                            outputPath: './assets/img/',
                            publicPath: './assets/img/',
                        }
                    },
                    'webp-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: '0.0.0.0',
        port: PORT,
        open: 'Firefox',
        openPage: 'http://localhost:' + PORT,
        watchContentBase: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        })
    ]
};