'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglifycss = require('gulp-uglifycss');

const { series, parallel } = require('gulp');

gulp.task('sass', function () {
  return gulp.src('./assets/css/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./assets/css/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'sass:watch'));
