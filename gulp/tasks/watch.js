var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function(){
    // watch(config.less.all, function(){  //监听所有less
    //     gulp.start('less');             //出现修改、立马执行less任务
    // });
    // watch(config.script.src,function () {
        
    // });
    gulp.watch(config.script.src, ['script']);

    gulp.watch(config.less.all, ['less']);

    gulp.watch(config.image.src, ['imagemin']);

    gulp.watch(config.html.src, ['html']);
    
});