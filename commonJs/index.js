/** 
 * 一、模块加载逻辑
 * 结论：
 * 1、requires是Commonjs提供的引用模块的方法，根据传入的文件路径，查找到文件，返回文件中的模块;
 * 2、require方法的参数为模块的相对路径，模块文件后缀为.js时可省略扩展名;若模块文件的命名不是.js,则文件名后缀不可省略;
 */
// console.log('****************************************************');
// console.log(require);
// console.log('****************************************************');
// console.log(require.toString());
// console.log('****************************************************');
// console.log(require.toString());
// var do2= require('./static/do2');
// do2();

/** 
 * 二、exports 和 module.exports的关系
 * module.exports是commonjs规范中指定的暴露模块的唯一接口，
 * exports 和 module.exports的关系，相当于在每个模块文件的头部声明：exports = module.exports;
 */
// console.log(module.exports)
// console.log(exports);
// console.log('module.exports === exports',module.exports === exports);

// '直接将模块赋值给module.exports的形式暴露模块，改变了module.exports,此时module.exports与exports不再是等价关系
// var mod1 = require('./static/mod1');
// mod1();

// 同理，直接将模块赋值给exports的形式暴露模块，等于给exports重新赋值，改变了exports指向module.exports指针，无法暴露模块，node会报错。
// var mod2 = require('./static/mod2');
// console.log(mod2);

// 编写模块文件时，暴露模块的方式exports和module.exports选其一，最好不要同时使用
// var mod3 = require('./static/mod3');
// console.log(mod3);


/** 
 * 三、模块内部的数据是否可被篡改？
 * require的缓存机制：模块第一次加载时读取的数据，会被缓存，再次引用模块的时候不会重新加载，而是去缓存中取
 * tips:应用中
 */
// var test1 = require('./static/test1');
// var test2 = require('./static/test2');
// console.log('第一次加载输出require.cache:')
// console.log(require.cache);
// test1.str = 'ccc'
// console.log("修改test1.str后输出require.cache" );
// console.log(require.cache);

// 清除缓存前
// test2();

// 清除缓存后
// delete require.cache['D:\\codeStore\\demo\\commonJs\\static\\test1.js'];
// console.log('清除缓存后输出require.cache' );
// console.log(require.cache);
// test2();



