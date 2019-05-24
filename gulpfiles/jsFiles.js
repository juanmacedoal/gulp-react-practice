var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var package = require('./../package.json');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

/** JavaScript compilation */
gulp
  .task('js', function() {
    var b = browserify('./src/index.js');

    return b
      .transform(babelify.configure({ presets: ['@babel/preset-env', '@babel/preset-react'] }))
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(package.dest.dist));
  })
  .task('js:min', function() {
    return gulp
      .src(package.paths.app)
      .pipe(browserify({ transform: ['babelify'] }))
      .bundle()
      .pipe(source(package.dest.app))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(package.dest.dist));
  });
