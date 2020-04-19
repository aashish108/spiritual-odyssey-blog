'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const { series, parallel } = require('gulp');

gulp.task('scss', function () {
  return gulp.src('./assets/css/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/scss/**/*.scss', ['scss']);
});

exports.build = series(sass);
