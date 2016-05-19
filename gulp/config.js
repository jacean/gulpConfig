/* gulp命令由gulpfile.js运行，所以src和dist文件夹路径如下（根目录下） */
// var config=require('./package.json');
var fs=require('fs');
var config=JSON.parse(fs.readFileSync('./package.json','utf-8'))
var src = './src';
var dest = './dist/'+config.name+"-"+config.version+'/';

module.exports = {
    less: {
        all: src + "/less/**/*.less",  //所有less
        src: src + "/less/*.less",     //需要编译的less
        dest: dest + "/css",　　　　　　 //输出目录
        settings: {　　　　　　　　　　　 //编译less过程需要的配置，可以为空

        }
    },
    //需要合并js的插件
    script: {
        all: src + "/script/**/*.js",  //所有js
        src: src + "/script/**/*.js",
        dest: dest + "/js",
        settings: {

        }
    },
    image: {
        src: src + "/image/*.*",
        dest: dest + "/image",
        settings: {

        }
    },
    html: {
        src: src + "/view/*.html",
        dest: dest + "/view",
        settings: {

        }
    }
};