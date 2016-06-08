process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');
elixir.config.publicPath = 'web';
elixir.config.appPath = 'src';
elixir.config.assetsPath = 'app/Resources/assets';

require('laravel-elixir-vueify');
var BrowserSync = require('laravel-elixir-browsersync2');



/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    /* BrowserSync.init();*/


    mix.scripts([
            'jquery/dist/jquery.js',
            'keen-ui/dist/keen-ui.js',
            'jqwidgets/jqwidgets/jqx-all.js'
        ],
        'web/js/all.js', 'app/Resources/assets/vendors');

    mix.styles([
        'keen-ui/dist/keen-ui.css',
        'vue-animate/vue-animate.css',
        'jqwidgets/jqwidgets/styles/jqx.base.css',
        'jqwidgets/jqwidgets/styles/jqx.metro.css'
    ], 'web/css/all.css', 'app/Resources/assets/vendors');

    mix.less('app.less');

    mix.browserify([
        'app.js'
    ]);

    mix.copy(
        'app/Resources/fonts', 'web/build/fonts'
    );

    /*    mix.Browserync({
     proxy : "lvma.local",
     logConnections: false,
     reloadOnRestart: false,
     notify: false,
     open: false,
     reloadDelay: 1000
     });*/

    mix.version(['web/css/all.css', 'web/css/app.css', 'web/js/all.js', 'web/js/bundle.js']);
});