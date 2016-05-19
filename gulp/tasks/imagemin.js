var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var handleErrors = require('../util/handleErrors');
var utf8Convert = require('gulp-utf8-convert');
// var imageminJpegRecompress = require('imagemin-jpeg-recompress');  //jpg图片压缩
// var imageminOptipng = require('imagemin-optipng');  //png图片压缩

var config = require('../config').image;
gulp.task('imagemin', function () {
    // var jpgmin = imageminJpegRecompress({
    //     accurate: true,//高精度模式
    //     quality: "high",//图像质量:low, medium, high and veryhigh;
    //     method: "smallfry",//网格优化:mpe, ssim, ms-ssim and smallfry;
    //     min: 70,//最低质量
    //     loops: 0,//循环尝试次数, 默认为6;
    //     progressive: false,//基线优化
    //     subsample: "default"//子采样:default, disable;
    // }),
    //     pngmin = imageminOptipng({
    //         optimizationLevel: 4
    //     });

    return gulp.src(config.src)
        .pipe(imagemin(
            //     {
            //     use: [jpgmin, pngmin]
            // }
        ))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));   //输出目录
});