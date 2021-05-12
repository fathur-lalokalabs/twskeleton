let mix = require('laravel-mix');

// compile JS
mix.js('src/app.js', 'public');

// compile tailwindCSS

mix.postCss('src/app.css', 'public', [
    require('tailwindcss'),
    require('autoprefixer'),
]);