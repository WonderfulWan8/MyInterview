/*
 * @Descripttion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-10 20:19:10
 * @LastEditTime: 2022-03-11 14:34:52
 */
// console.log(...[1,2,3]);//1 2 3
// console.log(1,...[2,3,4],5);//1 2 3 4 5

// function push(array, ...items){
//     array.push(...items);
// }

// function add(x, y){
//     return x + y;
// }
// const numbers = [4, 38];
// console.log( add(...numbers) );// 42

// console.log( ...[1,2] );

// function f( x, y, z ){
//     return (x+y+z);  
// }
// let args = [1,2,3];
// console.log(f(...args));//6

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// arr1.push(...arr2)
// console.log( arr1 );//[ 0, 1, 2, 3, 4, 5 ]

// let a1 = [1,2,3];
// let a2 = [...a1];
// a2[2] = 4;
// console.log(a1);//[ 1, 2, 3 ]
// console.log(a2);//[ 1, 2, 4 ]

// const arr1 = ['a','b'];
// const arr2 = ['c'];
// const arr3 = ['d', 'e'];
// let arr4 = [...arr1,...arr2,...arr3]
// console.log(arr1);
// arr4[0] = 'w'
// console.log(arr4);//[ 'a', 'b', 'c', 'd', 'e' ]

// const [first, ...rest] = [1,2,3,4,5];
// console.log(first);//1
// console.log(rest);//[ 2, 3, 4, 5 ]

// const [first1, ...rest1] = [];
// console.log(first1);//undefined
// console.log(rest1);//[]

// const [first2,...rest2] = ["foo"];
// console.log(first2);//foo
// console.log(rest2);//[]

// console.log([...'hello']);

// function length( str ){
//     return [...str].length;
// }
// console.log( length('x\uD83D\uDE80y') );
// 3

// let arrayLike = {
//     '0':'a',
//     '1':'b',
//     '2':'c',
//     length:3
// }
// let arr2 = Array.from(arrayLike);
// console.log(arr2);

// let ps = document.querySelectorAll('p');

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// // 判断数组内每个元素是否都大于2
// let everyResult = numbers.every( (item, index, array) => item > 2 );
// console.log(everyResult);// false

// //判断 数组内 是否存在一个元素 大于2
// let someResult = numbers.some( (item, index, array) => item >2 );
// console.log(someResult);// true

// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
// let filterResult = numbers.filter( (item) => item > 2 )
// //将数组内满足条件的项 组成数组后返回 这个方法非常适合从数组中筛选满足给定条件的元素。
// console.log(filterResult);// [ 3, 4, 5, 4, 3 ]

// // 将数组每一项执行函数的返回值 结果，组成新的数组
// let mapResult = numbers.map( (item) => item*2 );
// console.log(mapResult);//[2, 4, 6, 8, 10, 8, 6, 4, 2]

// console.log(numbers.forEach( (item) => item*1 ));

// const o = {
//     method() {
//         return 'hello';
//     }
// }
// console.log(o.method());

let birth = '2000/01/01';
const Person = {
    name: '张三',
    birth,
    hello() { console.log('我的名字是：',this.name); }
}
student = new Person(birth);
student.hello();

let ms = {};
function getItem(key){
    return key in ms ? ms[key] : null;
}
function setItem(key, value){
    ms[key] = value;
}
function clear() {
    ms = {};
}
module.exports = {getItem, setItem, clear};
