const path = require('path');
module.exports = {
    proxy: 'localhost:9090',
    host: 'localhost',    // You can change as what you want
    open: 'external',
    port: '9000',
    baseDir: '/',
    index: path.resolve(__dirname, '../app/index.html'),
    files: [
        path.resolve(__dirname, '../app/**/*.*')
    ],
    ghostMode: {
        clicks: true,
        location: false,
        forms: true,
        scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'debug',
    logPrefix: 'gulp-patterns',
    notify: true,
    reloadDelay: 1
};