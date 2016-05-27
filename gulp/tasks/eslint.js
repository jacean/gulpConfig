var gulp = require('gulp');
var eslint = require('gulp-eslint');
var config = require('../config').script;
var handleErrors = require('../util/handleErrors');

gulp.task('eslint', function () {
    return gulp.src(config.src)
        .pipe(eslint())
        .on('error', handleErrors)
        .pipe(eslint.format());
});