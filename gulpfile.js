'use strict';

var gulp            = require('gulp'),

    // Tool for deleting files and folders
    del             = require('del'),

    // SASS compiler
    sass            = require('gulp-sass'),

    // Used for reading tags in HTML and replacing them with gulp output
    processhtml     = require('gulp-processhtml'),

    // Used to automatically add in css browser prefixes so we can just write lovely CSS3 without worrying
    autoprefixer    = require('gulp-autoprefixer'),

    // Used to minify our compiled CSS
    mincss          = require('gulp-minify-css'),

    // Used to combine multiple files into one
    concat          = require('gulp-concat'),

    // Used to group all of our angular templates into one file with the correct app name etc.
    templateCache   = require('gulp-angular-templatecache'),

    // Used for minifying javascript
    uglify          = require('gulp-uglify'),

    // Outputs the filesize of the gulp output
    size            = require('gulp-filesize'),

    // Used for linting javascript and checking for issues
    jshint          = require('gulp-jshint'),

    // Used for modular javascript development
    browserify      = require('browserify'),

    // A transformation for browserify that allows us to write ES6 without worrying.
    babelify        = require('babelify'),

    // Used by babelify
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),

    // Used for generating sourcemaps of minified javascript files.
    sourcemaps      = require('gulp-sourcemaps'),

    // I'll be honest, I have no idea what this does.
    gutil           = require('gulp-util');


// Polyfill required so the autoprefixer doesn't break.
require('es6-promise').polyfill();

/**
 * This task takes my lovely chunks of javascripts and browserifies them
 * so all of their dependencies are met in a nicely packaged way.
 * It also can transpile ES6 code to ES5, but I have commented that out
 * for the time being.
 */
gulp.task('scripts', function () {
  // set up the browserify instance on a task basis
    return browserify({ entries: './app/assets/scripts/app.js', debug: true })
    // .transform(babelify)
    .bundle()
    .pipe(source('brioche.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/assets/scripts'));
});

/**
 * This task is used to verify that I am not taking crazy pills
 * and that my javascript is in fact perfectly formed.
 */
gulp.task('jshint', function() {
    gulp.src('./app/assets/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('views', function() {
    gulp.src('./app/views/*.html')
    .pipe(templateCache({
        module: 'BriocheApp',
        filename: 'views.js'
    }))
    .pipe(gulp.dest('./app/assets/scripts/'));
});

/**
 * This task compiles, nay transforms my sass into a hard
 * shiny peg of truth (CSS). Compiles scss files for dev.
 */
gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // .pipe(mincss())
    .pipe(gulp.dest('./app/assets/css'));
});

/**
 * This task is used to lint and minify everything and stick
 * it in a folder called 'prod'.
 */
gulp.task('build', function() {

    // If the prod directory exists, delete it.
    del(['prod'], function() {

        // Copy over any html files
        gulp.src(['app/*.html'])
            .pipe(processhtml())
            .pipe(gulp.dest('prod'));

        // Copy over any images
        gulp.src(['app/assets/img/**/*'])
            .pipe(gulp.dest('prod/assets/img'));

        // Copy over any vendor files
        gulp.src(['app/assets/vendor/**/*'])
            .pipe(gulp.dest('prod/assets/vendor'));

        // JS
        gulp.src('./app/assets/scripts/**/*.js')
            .pipe(concat('app.js'))
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(gulp.dest('./prod/assets/scripts'))
            .pipe(size())
            .pipe(concat('app.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./prod/assets/scripts'))
            .pipe(size());

        // SCSS
        gulp.src('./scss/*.scss')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(concat('app.css'))
            .pipe(gulp.dest('./prod/assets/css'))
            .pipe(size())
            .pipe(concat('app.min.css'))
            .pipe(mincss())
            .pipe(gulp.dest('./prod/assets/css'))
            .pipe(size());

    });
});

/**
 * Deletes the prod folder
 */
gulp.task('clean', function() {
    del(['prod']);
});


/**
 * Run the Mocha tests
 */
gulp.task('test', function() {

});

/**
 *
 */
gulp.task('watch', function() {
    gulp.watch(['./app/assets/scripts/**/*.js', '!./app/assets/scripts/**/*.min.js'], ['scripts']);
    gulp.watch('./scss/**', ['sass']);
    // gulp.watch('./app/assets/scripts/**/*.js', ['jshint']);
    gulp.watch('./app/views/**', ['views']);
});
