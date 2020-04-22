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

// The below is for use on my local Pi device that mounts my Synology Cloud share folder
gulp.task('copyToVirtualHostDIR', function() {
  return gulp.src('_site/**/*', {base:'_site/'})
    .pipe(gulp.dest('../../../../../../../../mnt/share/Cloud/personal-blogs/spiritualodyssey')); 
});

gulp.task('sass', gulp.series('sass'));
gulp.task('sass-watch', gulp.series('sass', 'sass:watch'));
gulp.task('copyToPrd', gulp.series('copyToVirtualHostDIR'));
