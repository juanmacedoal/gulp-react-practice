var gulp = require('gulp');
var conf = require('./config');

gulp.task('html', function() {
  return gulp.src(conf.paths.srcHTML).pipe(gulp.dest(conf.paths.tmp));
});
