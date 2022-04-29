/*
 * @Descripttion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-10 17:56:05
 * @LastEditTime: 2022-03-10 20:16:39
 */
// function add(...values){
//     let sum = 0;
//     for(var val of values) {
//         sum += val;
//     }
//     return sum;
// }
// console.log( add(2,5,3) );

// function sortNumbers() {
//     return Array.from(arguments).sort();
// }
// const sortNumbers = (...numbers) => numbers.sort();


 // item 就是 items里面的一个个元素，第一个参数array作为容器装进去这些个元素
// function push(array,...items){
//     items.forEach( function(item){
//         console.log(item);
//         array.push(item);
//     } )
//     return array.sort();//输出并排序
//     // return array
// }
// console.log( push( [],1,2,5,4,3,6 ) );//[ 1, 2, 3, 4, 5, 6 ]

// function f(a,...b,c){

// }

// var f = function (){
// }
// console.log(f.name);//f

// const bar = function baz(){};
// console.log(bar.name); //baz

// var f = v => v;
// // var f = function(v){//上述等同于
// //     return v;
// // }
// console.log(f(3));// 3

// var q = () => 5;
// // var q = function (){//上述等同于
// //     return 5;
// // }
// console.log(q());// 5

// var sum = (num1, num2) => { return num1 + num2 };
// console.log(sum(1,7));// 8

// let getTempItem = (id) => ( {id: id, name: 'temp'} );
// console.log( getTempItem( 2 ) );//{ id: 2, name: 'temp' }

// let foo = () => ( { a: 1 } )
// console.log(foo());

// const full = ( first, second ) => ( first+ " "+ second );
// console.log( full('hello', 'world' ) );// hello world
// console.log( full('你好', '姜戈' ) );// 你好 姜戈

// const isEven = n => n%2 === 0;
// const square = n => n * n;
// console.log( isEven(7) );//false
// console.log( square(2) );//4

// [1,2,3].map( function(x){// map里的每一个元素都乘以自身
//     return x*x;
// })
// console.log( [1,2,3].map( x => x * x ) );

// let  result = values.sort( (a, b) => a-b );
// console.log( result(3,5) );

// const numbers = (...nums) => nums;
// console.log( numbers(1, 2, 3, 4, 5) );//[ 1, 2, 3, 4, 5 ]

// const headAndTail = (head,...tail) => [head, tail];
// console.log( headAndTail(1,2,3,4,5) );//[ 1, [ 2, 3, 4, 5 ] ]

function foo(){
    let id = 18;
    setTimeout( () =>{
      console.log('id:', this.id);
    },100)
}

var id = 21;
foo();// undefined
foo.call( {id: 42} );// id: 42

function Timer(){
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 100);
    setInterval( function() {
        this.s2++;
    },100)
}

Timer();