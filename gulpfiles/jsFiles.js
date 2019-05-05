var gulp = require('gulp');
var conf = require('./config');

gulp.task('js', function() {
  return gulp.src(conf.paths.srcJS).pipe(gulp.dest(conf.paths.tmp));
});
