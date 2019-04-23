var gulp = require('gulp');
var conf = require('./config');

gulp.task('js', function() {
  return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});
