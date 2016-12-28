const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, '../app'),
    entry: ['./main.ts'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/js'),
        publicPath: '/dist/js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '../node_modules')
        ],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
        alias: {

        }
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js') || assetFilename.endsWith('.ts');
        }
    },
    devtool: 'eval',
    target: 'web',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    profile: true,
    bail: true,
    cache: false,
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: true,
        poll: 500,
    },
    recordsPath: path.resolve(__dirname, '../records/records.json'),
    recordsInputPath: path.resolve(__dirname, '../records/records.json'),
    recordsOutputPath: path.resolve(__dirname, '../records/records.json')
};