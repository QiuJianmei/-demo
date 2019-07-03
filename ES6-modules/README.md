* 代码编译命令 babel static --out-dir js  //将static中的文件编译到js文件中
* 运行编译后的代码 node  js/index.js //node + 运行文件相对当前目录的相对路径

* 运行结论：
* ES6模块 import编译后走的是commonjs规范中的require方法
* 依赖前置 所有依赖项先加载