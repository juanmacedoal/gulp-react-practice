/**
 *  Server file
 *  Where the server is deploy
 */

'use strict';
var webserver = require('gulp-webserver');
var path = require('path');
var gulp = require('gulp');
var util = require('util');
var conf = require('./config');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
  return gulp.src(conf.paths.tmp).pipe(
    webserver({
      port: 3001,
      livereload: true,
      baseDir: './'
    })
  );
});
