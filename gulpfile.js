/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';
var fs = require('fs');
var gulp = require('gulp');
var packages = require('./package.json');
var run =  require('gulp-run');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulpfiles')
  .filter(function(file) {
    return /\.(js|coffee)$/i.test(file);
  })
  .map(function(file) {
    require('./gulpfiles/' + file);
  });

/**
 * Compiling resources and serving application
 */

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
})
.task('serve', ['bower', 'clean', 'lint', 'less', 'js', 'server'], function() {
  return gulp.watch([
    packages.paths.js, packages.paths.jsx, packages.paths.html, packages.paths.less
  ], [
   'lint', 'less', 'js', browserSync.reload
  ]);
})
.task('serve:minified', ['bower', 'clean', 'lint', 'less:min', 'js:min', 'server'], function() {
  return gulp.watch([
    packages.paths.js, packages.paths.jsx, packages.paths.html, packages.paths.less
  ], [
   'lint', 'less:min', 'js:min', browserSync.reload
  ]);
});

