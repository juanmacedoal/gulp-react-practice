/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';
'use strict';

var fs = require('fs');
var gulp = require('gulp');

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
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', gulp.series('build', 'serve'));
