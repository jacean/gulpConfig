var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js代码压缩
var config = require('../config').script;

    
gulp.task('script', function(){
    return gulp.src(config.src)         //less源文件
        .pipe(uglify())    //执行编译
        .pipe(gulp.dest(config.dest)) ;  //输出目录
});

// // js处理
// gulp.task('js', function () {
//     var jsSrc = './src/js/*.js',
//         jsDst ='./dist/js';

//     gulp.src(jsSrc)
//         .pipe(jshint('.jshintrc'))
//         .pipe(jshint.reporter('default'))
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest(jsDst))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(uglify())
//         .pipe(livereload(server))
//         .pipe(gulp.dest(jsDst));
// });