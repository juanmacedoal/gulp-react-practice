var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var package = require('./../package.json');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

/** JavaScript compilation */
gulp.task('js', function() {
  return browserify(package.paths.app)
  .transform(reactify)
  .bundle()
  .pipe(source(package.dest.app))
  .pipe(gulp.dest(package.dest.dist));
})
.task('js:min', function() {
  return browserify(package.paths.app)
  .transform(reactify)
  .bundle()
  .pipe(source(package.dest.app))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(package.dest.dist));
})
