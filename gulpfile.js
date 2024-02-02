const gulp = require('gulp');
const sass = require('gulp-sass')(require ('sass'));
const browserSync = require('browser-sync').create();

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}


exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
} 