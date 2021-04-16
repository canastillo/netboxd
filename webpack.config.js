const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const PORT = '5500'

module.exports = {
    mode: MODE,
    entry: './src/js/index.js',
    output: {
        path: PATH.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'html-loader',
            //             options: {
            //                 // minimize: true
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(png|jpg|jpeg)$/,
                // type: 'asset',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/img/',
                        }
                    },
                    // Acá voy a poner el de webp
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
        contentBase: PATH.join(__dirname, 'dist'),
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