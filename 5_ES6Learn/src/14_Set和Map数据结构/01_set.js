/*
 * @Descriptt ion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-11 14:44:16
 * @LastEditTime: 2022-03-17 14:42:14
 */



//set不会添加重复的值
// const s = new Set();
// [2, 3, 5, 8, 9, 7, 2].forEach( x => s.add(x) );
// console.log(s);//Set { 2, 3, 5, 8, 9, 7 }
// for (let i of s){
//     console.log(i); //
// }

// const set = new Set( [1,2,3,4,4] );
// console.log(set);//Set { 1, 2, 3, 4 }

// const set1 = new Set( [1,2,3,4,4] );
// console.log(...set1);//1 2 3 4

// const set2 = new Set( [1, 2, 3, 4, 5, 5, 5, 5] );
// console.log(set2.size);// 5

// //set 用于数组去重
// let arr2 = [3, 4, 5, 6, 7, 6,7,8,9,8];
// // console.log( [...new Set(arr2)] ); //[3, 4, 5, 6,7, 8, 9]
// for ( let i of [...new Set(arr2)] ){
//     console.log(i);
// }


// abc
// console.log( [...new Set('abccaabccb')].join('') );

// let set = new Set();
// let a = NaN;
// let b = NaN;
// set.add(a);

// console.log(set);//NaN

// let s = new Set();

// s.add(1).add(2).add(2);

// console.log(s.size);//2

// console.log(s.has(1));//true
// console.log(s.has(2));//true
// console.log(s.has(3));//false

// s.delete(2);
// console.log(s);//Set { 1 }

// s.clear()
// console.log( s ); // Set {}

// const obj = {
//     'width':1,
//     'height':2,
// }
// if( obj['width'] ){
//     console.log('1234');
// }

// const set = new Set();
// set.add('height');
// set.add('width');
// if( set.has('width') ){
//     console.log(124);
// }
// Array.form可以将Set结构转为数组
// const items = new Set( [1, 2, 3, 4, 5] );
// const array = Array.from(items);

// function dedupe(array){
//     return Array.from( new Set(array) );
// }
// console.log( dedupe( [1,1,2,3] ) );

// Array.form可以将Set结构转为数组
// const items = new Set([1, 2, 3, 4, 5]);
// const array = Array.from(items);
// console.log(array);

// // 数组去重
// function dedupe(array){
//     return Array.from( new Set(array) );
// }
// console.log(dedupe([1,1,2,3]));

let set = new Set(['red', 'green', 'blue']);
for( let key of set.keys()  ){
    console.log(key);
}
// red
// green
// blue

for( let value of set.values() ){
    console.log(value);
}

// red
// green
// blue

for( let entire of set.entries() ){
    console.log(entire);
}

// [ 'red', 'red' ]
// [ 'green', 'green' ]
// [ 'blue', 'blue' ]

//  set.forEach( x => x+'123' );
//  console.log(set);

// set.forEach( (key, value) => {  value+'123' });

// console.log(set);

let set1 = new Set([1,2,3]);
// set1.forEach( (key, value) => { console.log(key+ ":"+value) } );

set1.forEach( (key,value) => { value+1 } );
console.log(set1);

const data = {};
const element = document.getElementById();