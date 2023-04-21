// let set = new Set(['red', 'g', 'y']);
// for (let item of set.keys()) {
//   console.log(item); //red g y
// }

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (let item in obj) {
//   console.log(item); // a b c
// }
// // for (let value of obj) {
// //   console.log(value);//报错
// // }
// const arr = [4, 5, 6];
// for (let item in arr) {
//   console.log(item); //0 1 2
// }
// for (let item of arr) {
//   console.log(item); //4 5 6
// }

// const str = 'test';
// for (let item in str) {
//   console.log(item); //0 1 2 3
// }
// for (let item of str) {
//   console.log(item); //t e s t
// }

// let set = new Set(['red', 'red', 'green', 'yellow']);
// for (let value of set.keys()) {
//   console.log(value); // red green yellow
// }
// for (let value of set.values()) {
//   console.log(value); // red green yellow
// }
// for (let en of set.entries()) {
//   console.log(en); // [ 'red', 'red' ]['green', 'green'][('yellow', 'yellow')];
// }
// set.forEach((ele) => console.log(ele)); // red green yellow

// // 遍历的应用
// let set1 = new Set(['red', 'green', 'yellow']);
// let arr = [...set1];
// console.log(arr); //[ 'red', 'green', 'yellow' ]
// // 去重
// let arr2 = [1, 3, 4, 5, 2, 31, 31, 31, 1, 2, 3];
// let unique = new Set(arr2);
// console.log(unique); //Set(6) { 1, 3, 4, 5, 2, 31 }

// // 添加、删除成员
// const m = new Map();
// const o = { p: 'Hello world' };
// m.set(o, 'content');
// console.log('m: ', m); // Map(1) { { p: 'Hello world' } => 'content' }
// console.log(m.get(o)); //content
// console.log(m.has(o)); // true;
// console.log(m.delete(o)); // true;
// console.log(m.has(o)); // false

// //接收一个数组作为参数，运行原理
// const map = new Map([
//   ['name', 'zhangsan'],
//   ['age', '18'],
// ]);
// console.log('map:', map); //map: Map(2) { 'name' => 'zhangsan', 'age' => '18' }
// console.log(map.has('name')); //true

// let arr = [
//   ['name', 'zhangsan'],
//   ['age', '18'],
// ];
// const map1 = new Map();
// arr.forEach(([key, value]) => map1.set(key, value));
// console.log('map1: ', map1); //map1:  Map(2) { 'name' => 'zhangsan', 'age' => '18' }

// // map的键和内存地址绑定, k1 k2 值相同但是内存地址不同
// let k1 = ['a'];
// let k2 = ['a'];
// const map3 = new Map();
// map3.set(k1, 111).set(k2, 222);
// console.log(map3.get(k1)); // 111
// console.log(map3.get(k2)); // 222

// 操作方法
// const map = new Map();
// map.set('foo', true);
// map.set('bar', false);
// console.log(map.size); //2

// const m = new Map();
// m.set('edition', 6); //键是字符串
// m.set(262, 'standard'); //键是数字
// m.set(undefined, 'nah'); //键是undefined
// // 链式写法
// let map2 = new Map().set(1, 'a').set(2, 'b').set(3, 'c');

// const m2 = new Map();
// const hello = () => {
//   console.log('hello');
// };
// m2.set(hello, '123'); //键是函数
// console.log(m2.get(hello)); //123

// const m3 = new Map();
// m3.set('edition', 6);
// m3.set(262, 'standard');
// m3.set(undefined, 'nah');

// console.log(m3.has('edition')); //true
// console.log(m3.has(262)); //true
// console.log(m3.has(undefined)); //true
// console.log(m3.has('123')); //false

// m3.delete(262);
// console.log(m3.has(262)); //false
// console.log(m3.size); //2
// m3.clear();
// console.log(m3.size); //0

// // 遍历方法
// const map4 = new Map([
//   ['F', 'no'],
//   ['T', 'yes'],
// ]);
// console.log('map4: ', map4);

// for (let key of map4.keys()) {
//   console.log(key); // F T
// }
// for (let value of map4.values()) {
//   console.log(value); // no yes
// }
// for (let item of map4.entries()) {
//   console.log(item[0], item[1]); // F no, T yes
// }
// // 或者
// for (let [key, value] of map4.entries()) {
//   console.log(key, value); // F no, T yes
// }

// // map转数组
// const map5 = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);
// console.log([...map5.keys()]); //[ 1, 2, 3 ]
// console.log([...map5.values()]); //['one', 'two', 'three']
// console.log([...map5.entries()]); //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
// console.log([...map5]); //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

// const map6 = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
// let newMap1 = new Map(
//   [...map6].filter(([key, value]) => {
//     return key < 3 && value != 'b';
//   })
// );
// console.log('newMap1: ', newMap1); //newMap1:  Map(1) { 1 => 'a' }

// let newMap = new Map(
//   [...map6].map(([key, value]) => {
//     return [key * 2, '_' + value];
//   })
// );
// console.log('newMap: ', newMap); //newMap:  Map(3) { 2 => '_a', 4 => '_b', 6 => '_c' }

// map6.forEach((value, key, mapS) => {
//   console.log('Key: %s, Value: %s', key, value);
//   // Key: 1, Value: a
//   // Key: 2, Value: b
//   // Key: 3, Value: c
// });

// // map转换为数组
// const map5 = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);
// console.log('[...map5]: ', [...map5]); //[...map5]:  [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
// let newArr = [];
// for (let [key, value] of map5.entries()) {
//   newArr.push(key);
//   newArr.push(value);
// }
// console.log('newArr: ', newArr); //[ 1, 'one', 2, 'two', 3, 'three' ]

// // 数组转为Map
// const map6 = new Map([
//   [1, 2],
//   [3, 4],
// ]);
// console.log('map6: ', map6); //map6:  Map(2) { 1 => 2, 3 => 4 }

// // Map转为对象 如果所有 Map 的键都是字符串，它可以无损地转为对象。
// function strMapToObj(strMap) {
//   let obj = Object.create(null);
//   for (let [key, value] of strMap) {
//     obj[key] = value;
//   }
//   return obj;
// }
// const myMap = new Map().set('yes', true).set('no', false);
// strMapToObj(myMap);
// console.log('myMap: ', myMap); //myMap:  Map(2) { 'yes' => true, 'no' => false }

// const str = ['a', 'b', 'c'];
// function printS() {
//   console.log(arguments);
// }
// printS(str); //参数为一个数组,其中包含三个元素
// printS(...str); //参数为三个元素

// // 数组合并
// const s1 = ['a', 'b', 'c'];
// const s2 = ['d', 'e'];
// let es5 = s1.concat(s2);
// console.log('es5: ', es5); //es5: [ 'a', 'b', 'c', 'd', 'e' ]
// let es6 = [...s1, ...s2];
// console.log('es6: ', es6); //es6: ['a', 'b', 'c', 'd', 'e']

// // 数组的克隆
// const s3 = [...s2];
// console.log('s3: ', s3); //s3:  [ 'd', 'e' ]

// // 将伪数组转化为真正的数组
// function argToArray() {
//   let arr = [...arguments];
//   return arr;
// }
// let s4 = argToArray(1, 2, 3, 4);
// console.log('s4: ', s4); //s4:  [ 1, 2, 3, 4 ]

let o1 = [1, 2, 3, 4, 5];
let o2 = { a: 1, b: 2, c: 3 };

// for (let key in o1) {
//   console.log('key: ', key);
// }
// for (let value of o1) {
//   console.log('value: ', value);
// }
for (let key in o2) {
  console.log('key: ', key);
}
for (let value of o2) {
  console.log('value: ', value);
}
