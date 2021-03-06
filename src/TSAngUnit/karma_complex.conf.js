/// <reference path="wwwroot/lib/npmlibs/systemjs/dist/system-polyfills.src.js" />
/// <reference path="wwwroot/lib/npmlibs/systemjs/dist/system-polyfills.js" />
// Karma configuration
// Generated on Mon Sep 26 2016 13:26:07 GMT-0400 (Eastern Daylight Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        browserify: {
            watch: true,
            debug: true
        },

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'browserify'],


        // list of files / patterns to load in the browser
        files: [
          //'wwwroot/lib/npmlibs/requirejs/require.js',
          //'wwwroot/lib/npmlibs/karma-requirejs/lib/adapter.js',
          'wwwroot/lib/jquery/**/*.js',
          'wwwroot/lib/bootstrap/dist/js/bootstrap.js',


          //'wwwroot/lib/npmlibs/core-js/**/*.js',
          'wwwroot/app/common/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'wwwroot/app/common/build/**/*.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'wwwroot/app/common/**/*.js': ['browserify']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'htmlDetailed'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // notify karma of the available plugins
        plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher',
          'karma-html-detailed-reporter',
          'karma-browserify'
        ],

        // configure the HTML-Detailed-Reporter to put all results in one file    
        htmlDetailed: {
            splitResults: false
        }
    });
}
