var gulp = require('gulp');

// gulp.task('default', ['less','script','imagemin','html','watch']);

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('less','script','imagemin','html','watch');
});
