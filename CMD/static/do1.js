console.log('do1.js加载');
define(function(require, exports, module){
    // console.log(module);
    // console.log(exports);
    // console.log(module.exports === exports);
    // console.log(require);
    var todo = function(){
        console.log('do1,被调用')
    }
    exports.todo = todo;
})