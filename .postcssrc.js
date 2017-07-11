// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    // 'autoprefixer': {},
    // 'precss': {},
    'postcss-import': {},
    'postcss-mixins': {}, // Note, that you must set this plugin before postcss-simple-vars and postcss-nested.
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions']
    }
  }
}
