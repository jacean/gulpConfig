var gulp = require('gulp');
// var uglify = require('gulp-uglify'); //js代码压缩
var config = require('../config').html;
var handleErrors = require('../util/handleErrors');
// var handleErrors = require('../util/convertToUtf8');
var utf8Convert = require('gulp-utf8-convert');
    
gulp.task('html', function(){
    return gulp.src(config.src)   
    .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                console.log(file + "ecnoding error");
            }
        }))
        .pipe(gulp.dest(config.dest));   //输出目录
});