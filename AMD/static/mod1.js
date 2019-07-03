console.log('加载mod1.js');
define(['static/mod1'],function(){
    var say =  function(){
        console.log('mod1.say被调用')
        // return 'mod1.say1'
    } 
    return{
        say: say
    }
});
