// 作用
//     识别所有值类型
//     识别函数
//     判断是否是引用类型（不可再细分）

let a;//undefined
const str = 'abc';
const n = 100;
const b = true;
const s = Symbol('s');

console.log( typeof a ); //undefined
console.log( typeof str );// string
console.log( typeof n ); //number
console.log( typeof b ); //boolean
console.log( typeof s );//symbol


console.log( typeof console.log );//function
console.log( typeof function() {} );//function
console.log( typeof null );//object
console.log( typeof ['a', 'b'] );//object
console.log( typeof { x: 100 });//object
