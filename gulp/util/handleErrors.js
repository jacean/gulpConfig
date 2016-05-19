var notify = require("gulp-notify");

module.exports = function(){

    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: "Error running something",
        message: 'Error: <%=error %>'
    }).apply(this, args);//替换为当前对象

    this.emit();//提交
};