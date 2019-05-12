var gulp = require('gulp');
var gulp = require('gulp');
var package = require('./../package.json');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


/**
 * Compiling resources
 */
gulp.task('serve', ['bower', 'clean', 'lint', 'less', 'js', 'server'], function() {
  return gulp.watch([
    package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
  ], [
   'lint', 'less', 'js', browserSync.reload
  ]);
})
