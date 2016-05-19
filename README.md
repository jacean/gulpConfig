# gulpConfig
前端项目使用gulp构建能带来很大的便利性，通过gulp的构建，我也进一步组织优化了项目的文件结构，以期形成一套前端开发模板结构，给开发和维护带来方便。
此项目持续更新gulp的插件任务和项目结构优化。
## projectStruct:
|--dist/
    |--progectVersion/
        |--css/
        |--image/
        |--js/
        |--view/
|--gulp/
    |--tasks/
        |--...
    |--config.js
|--node_modules/
|--src/
    |--image/
    |--less/
    |--script/
    |--view/
|--gulpfile.js
|--package.json
|--README.md

## gulpTask
|--tasks/
    |--clean.js
    |--default.js
    |--html.js
    |--imagemin.js
    |--less.js
    |--script.js
    |--watch.js
