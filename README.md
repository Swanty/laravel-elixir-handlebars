# Laravel Elixir wrapper around gulp-handlebars

Compile your .hbs (Handlebars) templates with Laravel Elixir

## Requirements

* Laravel Elixir 5 (Laravel 5.2)

## Install

```
npm install github:swanty/laravel-elixir-handlebars#v1.0.1
```

## Usage

File: ./resources/assets/js/templates/sample.hbs
```html
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>
```

File: ./gulpfile.js
```javascript
var elixir = require('laravel-elixir');
 
require('laravel-elixir-handlebars');
 
elixir(function (mix) {
 
    mix
        .handlebars([
            // Base directory is ./resources/assets/js/templates/
            '*.hbs'
        ], 'MyApp.templates', './public/js/templates.js')
        .scripts([
            // ...
            './node_modules/handlebars/dist/handlebars.runtime.min.js',
            './public/js/templates.js',
            // ...
        ], './public/js/scripts.js');
    
});
```

Creating html from compiled template
```javascript
var context = {title: "My New Post", body: "This is my first post!"};
var html = MyApp.templates.sample(context);
console.log(html);
```

## Contributions

Please submit all pull requests to [develop](https://github.com/Swanty/laravel-elixir-handlebars/tree/develop) branch.

- **Create feature branches** - I won't pull from your master branch.

## Support

Bugs and feature requests are tracked on [GitHub](https://github.com/Swanty/laravel-elixir-handlebars/issues).

## License

This package is released under the [MIT License](LICENSE).
