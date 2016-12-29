const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
var devWebpackConfig = require('./configs/webpack.config.dev.js');
var prodWebpackConfig = require('./configs/webpack.config.prod.js');

const browserSync = require('browser-sync');
var bsConfig = require('./configs/bs.config.js');

const path = require('path');
const $ = require('gulp-load-plugins');
var port = 9090;
var config;

gulp.task('prod', prod);
gulp.task('dev', dev);
gulp.task('default', dev);

function prod(callback) {
    webpack(prodWebpackConfig, function(err, stats) {
        if (err) {
            throw new $.util.PluginError('webpack', err);
            $.util.log('[webpack]', stats.toString({
                // output options
            }));
            callback();
        }
    });
}

function dev() {
    new WebpackDevServer(webpack(devWebpackConfig), {
        // Dev Server Options
        hot: true,
        compress: true,
        inline: true,
        contentBase: __dirname,
        publicPath: '/dist/js/',
        proxy: [{
            path: ['/rest/**'],
            target: 'localhost/'
        }]
    })
    .listen(port, 'localhost', function(err) {
        if (err) {
            throw new $.util.PluginError('webpack-dev-server', err);
            $.util.log('[webpack-dev-server]', 'http://localhost:' + port + '/webpack-dev-server/index.html');
        }
        else {
            bsServer();
        }
    });
}

function bsServer() {
    browserSync(bsConfig);
}