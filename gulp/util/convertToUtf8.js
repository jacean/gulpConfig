var gulp = require('gulp');
var utf8Convert = require('gulp-utf8-convert');
 
gulp.task('convert',function() {
    gulp.src("./test.txt")
        .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                //notify 
            }
        }))
        .pipe(gulp.dest('./'));
}); 
// module.exports = function(){
//     var args = Array.prototype.slice.call(arguments);

//    return  utf8Convert({
//             encNotMatchHandle:function (file) {
//                 console.log(file + "编码不正确");
//             }
//         }).apply(this,args);
// }