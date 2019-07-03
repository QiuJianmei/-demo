exports = module.exports;
exports.fn1 = function(){
    console.log('mod3.js fn1被调用')
}
exports.str1 = 'bbb'

var obj = {
    fn:function(){
        console.log('mod3.js fn被调用')
    },
    str: 'aaaaa'
}
module.exports = obj;
console.log(exports);

