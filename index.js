var gulp = require('gulp');
var Elixir = require('laravel-elixir');

var $ = Elixir.Plugins;
var config = Elixir.config;

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

Elixir.extend('handlebars', function (templates, namespace, output, baseDir) {
    var paths = prepGulpPaths(templates, baseDir, output);

    new Elixir.Task('handlebars', function () {
        this.log(paths.src, paths.output);

        return (
            gulp
                .src(paths.src.path)
                .pipe(handlebars())
                .on('error', function(e) {
                    new Elixir.Notification().error(e, 'Handlebars Compilation Failed!');
                    this.emit('end');
                })
                .pipe(wrap('Handlebars.template(<%= contents %>)'))
                .pipe(declare({
                    namespace: namespace,
                    noRedeclare: true, // Avoid duplicate declarations
                }))
                .pipe($.concat(paths.output.name))
                .pipe(gulp.dest(paths.output.baseDir))
                .pipe(new Elixir.Notification('Handlebar Templates Compiled!'))
        );
    })
    .watch(paths.src.path)
    .ignore(paths.output.path);

});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  baseDir
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
var prepGulpPaths = function(src, baseDir, output) {
    return new Elixir.GulpPaths()
        .src(src, baseDir || 'resources/views/')
        .output(output || config.get('public.js.outputFolder'), 'templates.js');
};