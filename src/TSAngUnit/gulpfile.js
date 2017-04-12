/// <binding AfterBuild='default, karma_complex' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var shell = require('gulp-shell');
var del = require("del");
var browserify = require("gulp-browserify");

var webroot = "./wwwroot/";

var paths = {
    client: [webroot + "app/"],
    npmSrc: "./node_modules/",
    npmLibs: webroot + "lib/npmlibs/"
};

gulp.task("default", function () {
    // place code for your default task here
});

gulp.task("clean", function () { });

gulp.task('copy_angular', function () {
    gulp.src(paths.npmSrc + 'core-js/**/*.js').pipe(gulp.dest(paths.npmLibs + 'core-js'));
    gulp.src(paths.npmSrc + '@angular/**/*.js').pipe(gulp.dest(paths.npmLibs + '@angular'));
    gulp.src(paths.npmSrc + 'zone.js/**/*.js').pipe(gulp.dest(paths.npmLibs + 'zone.js'));
    gulp.src(paths.npmSrc + 'systemjs/**/*.js').pipe(gulp.dest(paths.npmLibs + 'systemjs'));
    gulp.src(paths.npmSrc + 'reflect-metadata/**/*.js').pipe(gulp.dest(paths.npmLibs + 'reflect-metadata'));
    gulp.src(paths.npmSrc + 'rxjs/**/*.js').pipe(gulp.dest(paths.npmLibs + 'rxjs'));
    gulp.src(paths.npmSrc + 'symbol-observable/**/*.js').pipe(gulp.dest(paths.npmLibs + 'symbol-observable'));
});

gulp.task('copy_karma', function () {
    gulp.src(paths.npmSrc + 'requirejs/**/*.js').pipe(gulp.dest(paths.npmLibs + 'requirejs'));
    gulp.src(paths.npmSrc + 'karma-requirejs/**/*.js').pipe(gulp.dest(paths.npmLibs + 'karma-requirejs'));
});

gulp.task('server_complex', ['node', 'karma_complex']);

gulp.task('node', shell.task('node app.js'));
gulp.task('karma_complex', shell.task('powershell -Command "./karma_complex.ps1"'));

gulp.task("browserify", function () {
    gulp.src(paths.client + "Common/ComplexAlerter.js").pipe(browserify()).pipe(gulp.dest("./build"));
});