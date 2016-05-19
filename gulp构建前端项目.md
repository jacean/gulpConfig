# gulp构建前端项目
## 安装全局gulp
> npm install -g gulp
```
C:\Users\wanja\AppData\Roaming\npm\gulp -> C:\Users\wanja\AppData\Roaming\npm\no
de_modules\gulp\bin\gulp.js
gulp@3.9.1 C:\Users\wanja\AppData\Roaming\npm\node_modules\gulp
├── interpret@1.0.1
├── deprecated@0.0.1
├── pretty-hrtime@1.0.2
├── archy@1.0.0
├── minimist@1.2.0
├── semver@4.3.6
├── tildify@1.2.0 (os-homedir@1.0.1)
├── v8flags@2.0.11 (user-home@1.1.1)
├── chalk@1.1.3 (escape-string-regexp@1.0.5, ansi-styles@2.2.1, supports-colo
r@2.0.0, has-ansi@2.0.0, strip-ansi@3.0.1)
├── orchestrator@0.3.7 (stream-consume@0.1.0, sequencify@0.0.7, end-of-stream
@0.1.5)
├── liftoff@2.2.1 (extend@2.0.1, rechoir@0.6.2, flagged-respawn@0.3.2, resolv
e@1.1.7, findup-sync@0.3.0)
├── vinyl-fs@0.3.14 (graceful-fs@3.0.8, strip-bom@1.0.0, vinyl@0.4.6, default
s@1.0.3, mkdirp@0.5.1, through2@0.6.5, glob-stream@3.1.18, glob-watcher@0.0.6)
└── gulp-util@3.0.7 (beeper@1.1.0, array-differ@1.0.0, lodash._reevaluate@3.0
.0, array-uniq@1.0.2, object-assign@3.0.0, lodash._reescape@3.0.0, lodash._reint
erpolate@3.0.0, replace-ext@0.0.1, fancy-log@1.2.0, has-gulplog@0.1.0, gulplog@1
.0.0, vinyl@0.5.3, lodash.template@3.6.2, multipipe@0.1.2, through2@2.0.1, datef
```
是win10，所以在我的D:/xampp/htdocs/下新建了gulpStart文件夹。
### init初始化项目
将命令行切换到gulpStart目录下，执行
> npm init

```
name: (gulpStart) gulpStart
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

就是帮助完成package.json文件的，生成格式化的项目信息，咱们也可以自己手动建立package.json文件。
注意上面提示第三段，使用"npm install <pkg> --save"会把插件信息写入到packages.json中，所以咱们手动建立的package.json一定要是json格式的，可别空白了。如果不想输入其他版权信息啥的，可以只写入"{}",空白的大括号。


### 安装插件

然后执行如下命令，安装插件。
> npm install --save-dev gulp
npm install --save-dev gulp-less
npm install --save-dev gulp-watch
npm install --save-dev require-dir
npm install --save-dev require-dir

 --save-dev表示在package.json添加配置
 
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

### 常用插件
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
gulp-livereload:  服务器控制客户端同步刷新（需配合chrome插件LiveReload及tiny-lr）

#### imagemin插件
> D:\xampp\htdocs\gulpStart\node_modules\gulp-imagemin\index.js:2
const path = require('path');
^^^^^
SyntaxError: Use of const in strict mode.



### 添加任务
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
在命令行执行gulp就会执行默认任务hello，
```
D:\xampp\htdocs\gulpStart>gulp
[13:16:10] Using gulpfile D:\xampp\htdocs\gulpStart\gulpfile.js
[13:16:10] Starting 'hello'...
你好
[13:16:10] Finished 'hello' after 1.54 ms
[13:16:10] Starting 'default'...
[13:16:10] Finished 'default' after 17 μs
```



## 安装less
> $ npm install -g less

1. 变量
  @value:x;
  编译时将此变量替换为值，只能定义一次，故实为常量
  
  
## gulp模式匹配
> http://www.cnblogs.com/guoyansi19900907/p/5054920.html

```
Gulp内部使用了node-glob模块来实现其文件匹配功能。我们可以使用下面这些特殊的字符来匹配我们想要的文件：
 * 匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾
 ** 匹配路径中的0个或多个目录及其子目录,需要单独出现，即它左右不能有其他东西了。如果出现在末尾，也能匹配文件。
 ? 匹配文件路径中的一个字符(不会匹配路径分隔符)
 [...] 匹配方括号中出现的字符中的任意一个，当方括号中第一个字符为^或!时，则表示不匹配方括号中出现的其他字符中的任意一个，类似js正则表达式中的用法
 !(pattern|pattern|pattern) 匹配任何与括号中给定的任一模式都不匹配的
 ?(pattern|pattern|pattern) 匹配括号中给定的任一模式0次或1次，类似于js正则中的(pattern|pattern|pattern)?
 +(pattern|pattern|pattern) 匹配括号中给定的任一模式至少1次，类似于js正则中的(pattern|pattern|pattern)+
 *(pattern|pattern|pattern) 匹配括号中给定的任一模式0次或多次，类似于js正则中的(pattern|pattern|pattern)*
 @(pattern|pattern|pattern) 匹配括号中给定的任一模式1次，类似于js正则中的(pattern|pattern|pattern)
下面以一系列例子来加深理解
 * 能匹配 a.js,x.y,abc,abc/,但不能匹配a/b.js
 *.*  能匹配 a.js,style.css,a.b,x.y
 */*/*.js 能匹配 a/b/c.js,x/y/z.js,不能匹配a/b.js,a/b/c/d.js
 ** 能匹配 abc,a/b.js,a/b/c.js,x/y/z,x/y/z/a.b,能用来匹配所有的目录和文件
 **/*.js 能匹配 foo.js,a/foo.js,a/b/foo.js,a/b/c/foo.js
 a/**/z 能匹配 a/z,a/b/z,a/b/c/z,a/d/g/h/j/k/z
 a/**b/z 能匹配 a/b/z,a/sb/z,但不能匹配a/x/sb/z,因为只有单**单独出现才能匹配多级目录
 ?.js 能匹配 a.js,b.js,c.js
 a?? 能匹配 a.b,abc,但不能匹配ab/,因为它不会匹配路径分隔符
 [xyz].js 只能匹配 x.js,y.js,z.js,不会匹配xy.js,xyz.js等,整个中括号只代表一个字符
 [^xyz].js 能匹配 a.js,b.js,c.js等,不能匹配x.js,y.js,z.js
当有多种匹配模式时可以使用数组
//使用数组的方式来匹配多种文件
gulp.src(['js/*.js','css/*.css','*.html'])
使用数组的方式还有一个好处就是可以很方便的使用排除模式，在数组中的单个匹配模式前加上!即是排除模式，它会在匹配的结果中排除这个匹配，要注意一点的是不能在数组中的第一个元素中使用排除模式
gulp.src([*.js,'!b*.js']) //匹配所有js文件，但排除掉以b开头的js文件
gulp.src(['!b*.js',*.js]) //不会排除任何文件，因为排除模式不能出现在数组的第一个元素中
此外，还可以使用展开模式。展开模式以花括号作为定界符，根据它里面的内容，会展开为多个模式，最后匹配的结果为所有展开的模式相加起来得到的结果。展开的例子如下：
a{b,c}d  会展开为 abd,acd
a{b,}c 会展开为 abc,ac
a{0..3}d 会展开为 a0d,a1d,a2d,a3d
a{b,c{d,e}f}g 会展开为 abg,acdfg,acefg
a{b,c}d{e,f}g 会展开为 abdeg,acdeg,abdeg,abdfg
```




## git移除远程仓库里已经被提交但需要忽略的文件
预览要移除的远程文件
```
$ git rm -r -n --cached src/image/*
rm 'src/image/2.png'
rm 'src/image/backimg.jpg'
rm 'src/image/huazhou.png'
rm 'src/image/shutterstock.png'
rm 'src/image/书边框.png'
rm 'src/image/金色.png'
```
移除远程文件
```
$ git rm --cached src/image/*
rm 'src/image/2.png'
rm 'src/image/backimg.jpg'
rm 'src/image/huazhou.png'
rm 'src/image/shutterstock.png'
rm 'src/image/书边框.png'
rm 'src/image/金色.png'
```
然后提交推送就好

## 参考
http://www.jianshu.com/p/f151eccc10e6
http://www.dbpoo.com/getting-started-with-gulp/