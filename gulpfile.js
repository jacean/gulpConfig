var gulp = require("gulp");
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true});




//  gulp.task("hello",function(){
//         console.log("你好");
//     });
//     gulp.task("default",['hello']);

// var notify = require("gulp-notify");
// gulp.task("notify", function (params) {
//     gulp.src("./view/index.html")
//         .pipe(notify("hello"));
// });
//     gulp.task("default",['notify']);