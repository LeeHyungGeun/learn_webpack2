const gulp = require('gulp');
const webpack = require('webpack');
const gwebpack = require('gulp-webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const $ = require('gulp-load-plugins');
var devWebpackConfig = require('./configs/webpack.config.dev.js');
var prodWebpackConfig = require('./configs/webpack.config.prod.js');
var port = 8080;
var config;


gulp.task('prod', function() {
    return gulp.src([''])
        .pipe(gwebpack(prodWebpackConfig), webpack)
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('dev', function() {
    new WebpackDevServer(webpack(devWebpackConfig), {
        hot: true,
        compress: true,
        inline: true,
        contentBase: __dirname,
        publicPath: '/dist/js/'
    })
    .listen(port, 'localhost', function(err) {
        if (err) {
            throw new $.util.PluginError('webpack-dev-server', err);
            $.util.log('[webpack-dev-server]', 'http://localhost:' + port + '/webpack-dev-server/index.html');
        }
    });
});