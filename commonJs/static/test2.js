console.log('加载test2.js')
module.exports = function(){
    var test1 = require('./test1');
    console.log('test2中输出test1',test1);
}