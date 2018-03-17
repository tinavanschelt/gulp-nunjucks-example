'use strict';

const gulp = require('gulp');

var data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    // Gets .html and .njk files in pages
    return gulp.src('app/pages/**/*.+(html|njk)')
    // Adding data to Nunjucks
    .pipe(data(function() {
        return require('./app/data.json')
      }))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
        }))
    // output files in app folder
    .pipe(gulp.dest('app'))
});