var gulp = require('gulp');
// var uglify = require('gulp-uglify'); //js代码压缩
var config = require('../config').html;

    
gulp.task('html', function(){
    return gulp.src(config.src)         //less源文件
        // .pipe(uglify())    //执行编译
        .pipe(gulp.dest(config.dest));   //输出目录
});