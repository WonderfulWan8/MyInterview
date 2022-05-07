/*
 * @Descripttion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-09 20:47:15
 * @LastEditTime: 2022-03-10 17:54:29
 */
// function log(x, y){
//     y = y || 'World';
//     console.log( x, y );
// }
// log('Hello');
// log('Hello', 'China');
// log('Hello', '');

// function log2 ( x, y = 'Hello'){
//     console.log(x, y); //World Hello
// }
// log2('World');

// function f2( x, x, y=1 ){
// //Duplicate parameter name not allowed in this context
// }

// let x = 98 ;
// function calc ( p = x + 1 ){
//     console.log(p);
// }

// calc();//99

// x = 199;
// calc();//200

// function foo ( {x, y=5 } ){
//     console.log(x, y);
// }
// foo({x:1});
// foo( {x: 2, y: 6} );

// function fetch(url,{ body='', method = 'GET', headers = {} }){
//     console.log(body, method, headers );
// }
// fetch('http://example.com',{});

// function m1( { x = 1, y = 1 } = {} ){//默认值为2，
//     return [x, y];
// }
// function m2( { x, y } = { x: 2, y: 2 } ){
//     return [x, y];
// }

// console.log( m1() );
// console.log( m2() );
// console.log("------------------------------");

// console.log( m1( { x: 3, y: 8 } ) );
// console.log( m2( { x: 3, y: 8 } ) );
// console.log("------------------------------");


// console.log( m1( {x: 3} ) );
// console.log( m2( {x: 3} ) );
// console.log("------------------------------");


// console.log( m1( {z: 3} ) );
// console.log( m2( {z: 3} ) );
// console.log("------------------------------");


// console.log( m1() );
// console.log( m2() );
// console.log("------------------------------");

// function f( x = 1, y ){
//     return [ x, y ];
// }
// console.log( f() );//[ 1, undefined ]

// console.log( f(2) );//[ 2, undefined ]
// // console.log( f(,1) ); 报错
// console.log( f(undefined,1) );//[ 1, 1 ]

// console.log( ( function(a) {} ).length );// 1

// console.log( ( function(a = 5){} ).length );//

// console.log( ( function( a, b, c = 6 ){} ).length );

// var x = 1;
// function f( x, y = x ){
//     console.log(y);
// }
// f(2);//2

// let b = 1;
// function f1(a = b){// 括号内会形成一个单独的作用域，x本身没有定义，会指向外层的全局变量b
//     let b = 2;
//     console.log(a);
// }
// f1();//1

function throwIfMissing() {
    throw new Error('Missing parameter'); 
}
function foo( mustBeProvided = throwIfMissing() ){
    return mustBeProvided;
}

console.log( foo() );//Error: Missing parameter
console.log( foo(1) );//1