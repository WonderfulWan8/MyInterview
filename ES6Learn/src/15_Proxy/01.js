/*
 * @Descripttion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-17 17:43:27+
 * 
 * 
 * @LastEditTime: 2022-03-17 18:01:02
 */
// var obj = new Proxy( {}, {
//     get: function(target, propKey, receiver){
//         console.log(`getting ${propKey}!`);
//         return Reflect.get(target, propKey, receiver);
//     },
//     set: function(target, propKey, value, receiver){
//         console.log(`setting ${propKey}`);
//         return Reflect.set(target, propKey, value, receiver);
//     }
// } );

// var person = {
//     name: '张三'
// }
// var roxy = new Proxy( person, {
//     get: function(target, propKey){
//         if(propKey in target){
//             return target[propKey];
//         }else{
//             throw new ReferenceError("Prop name \"" + propKey +"\" does not exist.");
//         }
        
//     }
// } );

// const foo =[];
// const index = '0';
// foo[index] = 100;
// console.log(foo);

// function foo(){
//     console.log(a);
//     let a = 10;
//     a = 120;
// }
// console.log(foo());

// {
//     let s = 'student'
// }
// console.log(s);

// const foo = function(m){
//     let sum = m;
//     return function(n){
//         if(n>0){
//             sum+=n;
//         }
//         console.log(sum);
//     }
// }

// const f = foo(1);
// f(2);
// foo(0)(2);
// const obj = {
//     sum:0
// };
// f.call(obj,2);

// const  re = /he(l+(?:o))/;
// const foo = '3' + true;
// console.log(foo);

// const foo = parseInt('year2019',10);
// console.log(foo);

// const arr = [1,2,3,4]
// const  ret = arr.splice(2,2,3);

// console.log(ret[0]);
// console.log(arr.length);
// console.log(arr[2]);
// console.log(ret);

// console.log('0'==0);`
// console.log(true ==1);
// console.log(new String('Hello' == new String('hello')));
// console.log('' == 0);`

// var a = {age:20}
// var b = a
// b.age = 21
// console.log(a.age);

setTimeout(function(){
    console.log(1);
},0)
new Promise( function (resolve){
    console.log(2);
    for(var i=0;i<10000;i++){
        i == 9999 && resolve()
    }
    console.log(3);
} ).then(function(){
    console.log(4);
})
console.log(5);