console.log('加载mod2.js');
define(['static/mod2'],function(){
    var say = function(){
        console.log('mod2.say被调用')
        // return 'mod2.say'
    }
    return {
        say: say
    }
})