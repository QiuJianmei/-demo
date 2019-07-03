module.exports = function(){
    console.log('mod1被调用');
    console.log(module.exports);
    console.log(exports);
    console.log('mod1文件中的module.exports===exports:',module.exports === exports );
    
    console.log('**************************************************************************************************')
    console.log('结论：')
    console.log('直接将模块赋值给module.exports的形式，改变了module.exports,此时module.exports与exports不再是等价关系')
}
