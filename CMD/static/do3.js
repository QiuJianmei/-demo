console.log('do3.js加载');
define( function(require, exports, module) {
    // 引入模块2
    var todo = function(){
        var mod2 = require('./do2');
        console.log('do3被调用');
        mod2.todo();
    }
    exports.todo = todo;  
});