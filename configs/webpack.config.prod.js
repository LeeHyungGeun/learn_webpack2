const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, '../app/'),
    entry: ['./main.ts'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/js/'),
        publicPath: '/dist/js/'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '../node_modules')
        ],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, '../app'),
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                    'ts-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ],
    devtool: 'nosources-source-map',
    target: 'web',
    debug: false
};