var gulp = require('gulp');
var conf = require('./config');

gulp.task('html', function() {
  return gulp.src(conf.paths.srcCSS).pipe(gulp.dest(conf.paths.tmp));
});
