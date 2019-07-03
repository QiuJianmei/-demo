console.log('do2.js加载');
define( function(require, exports, module) {
    console.log(11111111111111111111)
    var str = 'do2str,';
    var todo = function(){
        console.log('do2被调用')
    }

    exports.str =str;
    exports.todo = todo;
    
});