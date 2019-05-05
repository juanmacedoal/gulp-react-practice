var gulp = require('gulp');
var conf = require('./config');
var browserSync = require('browser-sync');

function reloadBrowserSync(cb) {
  console.log('a');
  browserSync.reload();
  cb();
}

gulp.task('watch', () => {
  // gulp.watch([conf.paths.src], reloadBrowserSync);
  // gulp.watch('../src/*.js', reloadBrowserSync);
});
