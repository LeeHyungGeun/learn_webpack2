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
                // include: [
                //     path.resolve(__dirname, '../app/ts')
                // ],
                // enforce: "pre",   // This is preloaders
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                    'ts-loader'
                ]
            }
            // {
            //     test: /.css$/,
            //     loader: ExtractTextPlugin.extract({
            //         fallbackLoader: 'style-loader',
            //         loader: 'css-loader',
            //         publicPath: '/assets'
            //     })
            // }
        ]
    },
    resolve: {
        // directories where to look for modules
        modules: [
            'node_modules',
            path.resolve(__dirname, '../node_modules')
        ],
        // extensions that are used
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
        // a list of module anem aliases
        alias: {

        }
    },
    performance: {
        hints: 'warning',   // enum
        maxAssetSize: 200000,   // int (in bytes)
        maxEntrypointSize: 400000,  // int (in bytes)
        assetFilter: function(assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js') || assetFilename.endsWith('.ts');
        }
    },
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.
    devtool: 'eval',    // enum https://webpack.js.org/configuration/devtool/
    // the environment in which the bundle should run
    // changes chunk loading behavior and available modules
    target: 'web',  // enum 'web' is default https://webpack.js.org/configuration/target/
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            minimize: false
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