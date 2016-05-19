var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js代码压缩
var config = require('../config').script;
var handleErrors = require('../util/handleErrors');


    
gulp.task('script', function(){
    return gulp.src(config.src)        
        .pipe(uglify())
         .on('error',handleErrors)
        .pipe(gulp.dest(config.dest)) ; 
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