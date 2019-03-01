'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso         = require('gulp-csso');
const del          = require('del');
const gulp         = require('gulp');
const util         = require('gulp-util');
const runSequence  = require('run-sequence');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const zip          = require('gulp-zip');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const plumber      = require('gulp-plumber');
const os           = require('os');

var pjson          = require('./package.json');
var execSync       = require('child_process').execSync;

sass.compiler = require('node-sass');

var config = {
    production: !!util.env.production
}

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// gulp.task('default', ['mini']);

gulp.task('default', ['clean'], function () {
    if (!config.production) {
        console.warn("")
        console.warn(" ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗");
        console.warn(" ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝");
        console.warn(" ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗");
        console.warn(" ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║");
        console.warn(" ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝");
        console.warn("  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝");
        console.warn("\nThis is a dev build only, run 'gulp prod' for a production build.\n\n");
    }

    runSequence(
        'sass',
        'scripts'
    );
});

gulp.task('prod', ['clean'], function () {
    config.production = true;
    runSequence('default');
});

gulp.task('clean', () => del(['./assets/dist/']));

gulp.task('scripts', function() {
    return gulp.src([
            "./assets/js/particles.js",
            "./assets/js/particles.config.js",
        ])
        .pipe(plumber())
        .pipe(config.production ? util.noop() : sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(config.production ? uglify() : util.noop())
        .pipe(config.production ? util.noop() : sourcemaps.write())
        .pipe(gulp.dest('./assets/dist/js'));
});

gulp.task('sass', function () {
    let output = {};

    if (config.production)
        output = {outputStyle: 'compressed'};

    return gulp.src('./assets/css/**/*.scss')
        .pipe(config.production ? util.noop() : sourcemaps.init())
        .pipe(sass(output).on('error', sass.logError))
        .pipe(config.production ? util.noop() : sourcemaps.write())
        .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/js/**/*.js', ['scripts']);
    gulp.watch('./assets/css/**/*.scss', ['sass']);
});
