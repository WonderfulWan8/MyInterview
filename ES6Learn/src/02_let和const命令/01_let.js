// function func(){
//     let a = 10;
//     var a = 1;
// }

// function func(arg){
//     let arg;
// }
// func();

// function func(arg){
//     {
//         let arg;
//     }
// }
// func();

// var tmp = new Date();
// function f() {
//     // 下面tmp会变量提示相当于
//     // var tmp
//     console.log(tmp);//undefined
//     if(false){
//         var tmp = 'Hello World'
//     }
// }
// f();

// var s = 'hello';
// for( var i=0;i<s.length;i++ ){
//     console.log(s[i]);
// }
// console.log(i);

// function f1(){
//     let n = 8;
//     if(true){
//         let n = 10;
//     }
//     console.log(n);
// }
// f1();

// {{{{
//     {
//         let insane = 'Hello World';
//     }
//     console.log(insane);
// }}}}

// {{{{
//     let insane = 'Hello World';
//     {
//         let insane = 'Hello World';
//     }
// }}}}

function f() {
    console.log('i am outside');
}
// (
//     function(){
//         if(false){
//             function f(){ console.log('i am inside 2'); }
//         }
//         f();
//     }()
// );
{
    let a = 'secret';
    function f(){
        return a;
    }
}
{
    let a = 'secret';
    let f = function() {
        return a;
    }
}

if(true){
    let x = 1;
}

'use strict';
// if(true){
//     function f(){}
// }
if(true)
    function f(){}
