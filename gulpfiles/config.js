/* The paths of the application */
exports.paths = {
  src: 'src/*',
  srcJS: 'src/*.js',
  srcHTML: 'public/*.html',
  srcCSS: 'src/*.css',
  cvg: 'src/*.cvg',
  dist: 'dist',
  tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',
  styles: './styles'
};

/* The enviroments activation */
exports.environments = {
  port: {
    local: 3000
  },
  url: {
    local: ''
  },
  apis: {
    local: {}
  }
};
