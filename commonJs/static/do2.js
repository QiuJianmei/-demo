console.log('加载do2.js')

var do2 = function(){
    console.log('调用do2.js模块')
    var do1 = require('./do1');
    do1();
}
module.exports = do2;

console.log('do2.js加载完毕')