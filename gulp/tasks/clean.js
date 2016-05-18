var gulp = require('gulp');
var clean = require('gulp-clean');             //清空文件夹
var config = require('../config');
// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src([config.html.dest,config.image.dest,config.less.all,config.script.dest], {read: false})
        .pipe(clean());
});