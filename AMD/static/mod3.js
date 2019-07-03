console.log('加载mod3.js');
define(['static/mod3'], function(){
    var say1 = function(){
        console.log('mod3.say1被调用')
        // return 'mod2.say1'
    }
    var say2 = function(){
        console.log('mod3.say2被调用')
        require(['static/mod2'],function(mod2){
            console.log('在mod3中调用mod2');
            mod2.say();
        })
    }
    return {
        say1: say1,
        say2: say2
    };
});
