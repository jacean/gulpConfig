# gulpConfig
前端项目使用gulp构建能带来很大的便利性，通过gulp的构建，我也进一步组织优化了项目的文件结构，以期形成一套前端开发模板结构，给开发和维护带来方便。
此项目持续更新gulp的插件任务和项目结构优化。
[gulpConfig](git@github.com:jacean/gulpConfig.git)

## projectStruct:
暂定项目结构如下。
```
|--dist/                                项目编译后的目标文件
    |--progectVersion/                      根据版本号编译不同版本
        |--css/                                 所有css文件
        |--image/                               所有图片文件
        |--js/                                  所有js文件
        |--view/                                所有html文件
|--gulp/                                gulp任务执行所需
    |--tasks/                               gulp针对特定类型的任务
        |--less.js
        |--...
    |--util/                                通用工具模块
        |--handleErrors.js                      错误处理
        |--...
    |--config.js                            gulp任务所需和路径配置
|--node_modules/                        gulp模块文件夹
|--src/                                 项目开发中的原始文件 
    |--image/                               所有图片文件
    |--less/                                所有less文件
    |--js/                                  所有js文件
    |--view/                                所有html文件
|--gulpfile.js                          gulp入口js
|--package.json                         gulp项目信息和包管理文件
|--README.md                            readme
```

## gulpTask
```
|--tasks/
    |--clean.js                         清空编译目标文件夹
    |--default.js                       默认任务，依次启动各个任务最后启动监视
    |--html.js                          压缩html文件
    |--imagemin.js                      图片压缩
    |--less.js                          编译less
    |--script.js                        压缩js
    |--watch.js                         监视项目变动
```

## gulp部署
### 安装全局gulp
> npm install -g gulp

在提示信息中可以看到自己的安装路径、版本等
### init初始化项目
1. 新建项目文件夹。
    我当前的工作环境是win10，所以在我的D:/xampp/htdocs/下新建了gulpConfig文件夹。

2. 在gulpConfig目录下打开命令行
> npm init

```
name: (gulpConfig) gulpConfig
version: (1.0.0)
description: 学习gulp在前端开发中的应用
entry point: (gulpfile.js)
test command:
git repository:
keywords:
author: jacean
license: (ISC)
About to write to D:\xampp\htdocs\gulpStart\package.json:

{  
  "name": "gulpStart",
  "version": "1.0.0",
  "description": "学习gulp在前端开发中的应用",
  "main": "gulpfile.js",  
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jacean",
  "license": "ISC"
}


Is this ok? (yes) yes
```
init命令如提示所言
> This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

> See `npm help json` for definitive documentation on these fields
and exactly what they do.

> Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

初始化项目文件夹和项目信息，就是帮助完成package.json文件生成格式化的项目信息，还有指定入口模块gulpfile.js,。
咱们也可以自己手动建立package.json文件。注意上面提示第三段，使用"npm install <pkg> --save"会把插件信息写入到packages.json中，所以咱们手动建立的package.json一定要是json格式的，可别空白了。如果不想输入其他版权信息啥的，可以只写入"{}",空白的大括号。

### 安装插件

然后执行如下命令，安装插件。
```
npm install --save-dev gulp
npm install --save-dev gulp-less
npm install --save-dev gulp-watch
npm install --save-dev require-dir
npm install --save-dev require-dir
...
```
> npm install --save 与 npm install --save-dev 的区别
    --save-dev放在devDependencies里面，开发模式用devDep
    --save放在package.json 的dependencies，产品模式用dependencies 
 
安装完毕node模块，可见文件夹下多了node_modules子文件夹，同时package.json发生了变化。
```
{
  ...
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-less": "^3.1.0",
    "gulp-watch": "^4.3.5"
  }
  ...
}
```


### 添加任务

详细配置参见此项目文件。
#### 初试
在gulpfile.js中添加打印hello任务
```JS
var gulp=require("gulp");
//创建任务
gulp.task("hello",function(){
    console.log("你好");
});
//注册默认任务
gulp.task("default",['hello']);
```
在命令行执行*gulp*就会执行默认任务hello。也可以在命令行输入*gulp hello*直接启动hello任务。
```
D:\xampp\htdocs\gulpStart>gulp
[13:16:10] Using gulpfile D:\xampp\htdocs\gulpStart\gulpfile.js
[13:16:10] Starting 'hello'...
你好
[13:16:10] Finished 'hello' after 1.54 ms
[13:16:10] Starting 'default'...
[13:16:10] Finished 'default' after 17 μs
```
#### 任务结构
##### 入口
gulp执行任务的入口是gulpfile.js，这个是一句package.json的"main"字段定义的
>   
```
  "name": "gulpConfig",
  "version": "1.0.0",
  "description": "学习gulp在前端开发中的应用",
  "main": "gulpfile.js",
```
##### 任务分离
为以后维护方便，可将gulp任务单独放在文件夹里按功能分类,将入口导向至功能文件处。
```
//gulpfile.js

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true});
```
在项目根目录下新建gulp文件夹，建立子文件夹tasks和util，分别放置针对特定类型的功能模块和通用功能模块，新建配置文件config.js.
```
gulpConfig/
    |--gulp/                                gulp任务执行所需
        |--tasks/                               gulp针对特定类型的任务
            |--less.js
            |--...
        |--util/                                通用工具模块
            |--handleErrors.js                      错误处理
            |--...
        |--config.js                            gulp任务所需和路径配置
```
config.js里统一设置源路径和编译路径，传出各个任务所需配置。
##### 插件功能设置
以less为例
```
//config.js

var src = './src';
var dest = './dist';
module.exports = {
    less: {
        all: src + "/less/**/*.less",  //所有less
        src: src + "/less/*.less",     //需要编译的less
        dest: dest + "/css",　　　　　　 //输出目录
        settings: {　　　　　　　　　　　 //编译less过程需要的配置，可以为空

        }
    }
}

//less.js

var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').less;

gulp.task('less', function(){
    return gulp.src(config.src)         //less源文件
        .pipe(less(config.settings))    //执行编译
        .pipe(gulp.dest(config.dest));   //输出目录
});
```
其他插件功能也如此，在维护更改和变动的时候会有很大方便，整个结构和功能也很清晰。

#### 错误提示
gulp的任务系统是基于orchestrator的，提供的事件如下：
```
// FRAGILE: ASSUME: this list is an exhaustive list of events emitted
var events = ['start','stop','err','task_start','task_stop','task_err','task_not_found','task_recursion'];
```
监听方法如下
```
var gulp = require('gulp');
gulp.task('default',function(){
    return gulp.src('./**/*.*')
    .pipe()
}).on('task_start',function(){
    console.log('start');
}).on('task_err',function(err){
    console.log('error');
}).on('task_stop',function(){
    console.log('stop');
});
```
把错误消息通知出来又不中断gulp监听，我们需要安装gulp-notify。
然后，在gulp文件夹下的util内新建handleErrors.js文件
```
//handleErrors.js

var notify = require("gulp-notify");

module.exports = function(){

    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: "Error running something",
        message: 'Error: <%=error %>'
    }).apply(this, args);//替换为当前对象

    this.emit();//提交
};
```
然后在功能任务中引入此模块。
```
//script.js

var handleErrors = require('../util/handleErrors');
gulp.task('script', function(){
    return gulp.src(config.src)        
        .pipe(uglify())
         .on('error',handleErrors)
        .pipe(gulp.dest(config.dest)) ; 
});
```
这样当任务出错的时候会弹出提示，但是gulp还会继续监听。


### 常用插件
```
gulp-imagemin:    压缩图片
        imagemin-jpeg-recompress  optipng-bin
gulp-ruby-sass:   支持sass，安装此版本需要安装ruby
gulp-minify-css:  压缩css
gulp-jshint:        检查js
gulp-uglify:        压缩js
gulp-concat:      合并文件
gulp-rename:      重命名文件
gulp-htmlmin:     压缩html
gulp-clean:       清空文件夹
gulp-notify：     错误消息处理
gulp-utf8-convert:将文件转换成utf-8
gulp-livereload:  服务器控制客户端同步刷新（需配合chrome插件LiveReload及tiny-lr）
```
### 常见问题
1. 引入gulp-imagemin插件的时候报错
> D:\xampp\htdocs\gulpStart\node_modules\gulp-imagemin\index.js:2
const path = require('path');
^^^^^
SyntaxError: Use of const in strict mode.

原因是nodejs版本太低，我原本的版本是vs2015自带node，0.x.x，更新后v4.4.4
2. notify插件提示乱码
这多是控制台不支持utf-8的缘故，控制台默认中文编码是GBK，可以执行
> CHCP 65001

将控制台编码改为UTF-8,就可以正常显示了。

## 参考资料
学习配置中多方参考，有些文章在学习中即看即关，最后留下了这几个。
如果有发现我这里引用参考了您的文章，还请勿怪，留言提醒博主加上。
结构参考，代码引用:[前端们，gulp该用起来了，简单的demo入门——gulp系列（一）](http://www.cnblogs.com/1wen/p/4533608.html)
[gulp-notify处理报错----gulp系列（二)](http://www.cnblogs.com/1wen/p/4552485.html)
[前端自动化Gulp实际使用](http://www.jianshu.com/p/f151eccc10e6)
[Gulp安装及配合组件构建前端开发一体化](http://www.dbpoo.com/getting-started-with-gulp/)



