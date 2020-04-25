const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('./resources/js/app.js', 'public/js');
mix.webpackConfig({
    module: {
      rules: [
        {
          // Matches all PHP or JSON files in `resources/lang` directory.
          test: /resources[\\\/]lang.+\.(php|json)$/,
          loader: 'laravel-localization-loader',
        }
      ]
    }
});
mix.sass('./resources/sass/app.scss', 'public/css');