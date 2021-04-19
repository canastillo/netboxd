const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const PORT = '5500'

module.exports = {
    mode: MODE,
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/img/[name].webp'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: ['webp-loader']
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
            inject: 'head',
        })
    ]
}