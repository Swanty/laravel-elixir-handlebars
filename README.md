# Requirements

* Laravel 5.2
* Laravel Elixir 5

# Install

```
npm install github:swanty/laravel-elixir-handlebars#1.0.0 --save
```

# Usage

File: ./resources/views/test/sample.hbs
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
            './resources/views/test/sample.hbs'
        ], 'MyApp.templates', './public/js/templates.js')
        .scripts([
            // ...
            './node_modules/laravel-elixir-handlebars/node_modules/gulp-handlebars/node_modules/handlebars/dist/handlebars.runtime.min.js',
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
