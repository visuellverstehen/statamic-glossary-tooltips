const mix = require("laravel-mix");

mix
  .js("resources/js/bard.js", "dist/js/glossary-tooltips.js")
  .vue({version: 2})
