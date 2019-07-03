console.log('加载mod3.js');
import mod2 from './mod2.js';
function do1(){
    console.log(' mod3.do1被调用');
}
function do2(){
    console.log(' mod3.do1被调用');
    mod2();
}
export {
    do1,
    do2
}