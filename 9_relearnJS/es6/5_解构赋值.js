// function newPoint(options) {
//   const arg = typeof options === 'undefined' ? {} : options;
//   console.log('arg: ', arg);
//   console.log('arg.x: ', arg.x);
//   const x = arg.x ? arg.x : 0;
//   const y = arg.y ? arg.y : 0;
//   const z = arg.z ? arg.z : 0;
//   console.log(x, y, z);
// }
// newPoint({ x: 5, y: 6, z: 7 }); //5 6 7

// function newPoint2({ x = 0, y = 0, z = 0 }) {
//   console.log(x, y, z);
// }
// newPoint2({ x: 8, y: 9, z: 10 }); //8 9 10

/**
 * 数组的解构赋值
 */
//同时赋值多个变量
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// console.log(a, b, c, d); //1 2 3 4

// let [e, f, g, h] = [1, 2, 3, 4];
// console.log(e, f, g, h); //1 2 3 4

// 解构嵌套数组
// const arr = [1, [2, 3, [4, 5, 6]]];
// const [a, [b, c, [d, e, f]]] = arr;
// console.log(a, b, c, d, e, f); //1 2 3 4 5 6

// 不完全解构
// const [a, b, c] = [1, 2];
// console.log(a, b, c); //1 2 undefined
// const [d, e, [f, g]] = [3, 4, [5]];
// console.log(d, e, f, g); //3 4 5 undefined

// 解构的默认值
// let [a = true] = [];
// console.log(a); //true

/**
 * 对象的解构
 */
// const { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo, bar); //aaa bbb

/**
 * 函数参数的解构赋值
 */
// function f(options) {
//   let name = options.name;
//   let age = options.age;
//   let sex = options.sex;
//   console.log(name, age, sex); //n1 a1 s1
// }
// function f2({ name, age, sex }) {
//   // 经历了 let {name,age,sex} = options
//   console.log(name, age, sex); //n2 a2 s2
// }
// f({ name: 'n1', age: 'a1', sex: 's1' });
// f2({ name: 'n2', age: 'a2', sex: 's2' });

// 解构数组类型参数
// const arr = [
//   [1, 1],
//   [2, 2],
//   [3, 3],
//   [4, 4],
//   [5, 5],
// ];
// arr.map(([x, y]) => {
//   console.log(x + y); //2 4 6 8 10
// });

// 为参数设定默认值
// function func(name = 'test', age = 'test', sex = 'test') {
//   console.log(name, age, sex); //张三 test test
// }
// func('张三');

/**
 * 常见使用场景
 */

// // 交换变量
// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// console.log(x, y); // 2 1
// // 取函数返回值-数组
// function raf() {
//   return [1, 2, 3];
// }
// let [a, b, c] = raf();
// console.log(a, b, c); //1 2 3
// // 取函数返回值-对象
// function rof() {
//   return { d: 5, e: 6 };
// }
// let { d, e } = rof();
// console.log(d, e); //5 6
// // 函数参数的定义-参数与变量名一一对应
// function f1([x, y, z]) {
//   console.log(x, y, z); //1 2 3
// }
// f1([1, 2, 3]);
// function f2({ x, y, z }) {
//   console.log(x, y, z); //2 1 3
// }
// f2({ z: 3, x: 2, y: 1 });
// // 提取JSON数据
// let jsonData = {
//   id: 42,
//   code: 200,
//   data: {
//     num: 15,
//     price: 32,
//     pname: 'tst',
//   },
// };

// let {
//   id,
//   code,
//   data: { num, price, pname },
// } = jsonData;
// console.log(id, code, num, price, pname); //42 200 15 32 tst

// function createV() {
//   console.log(arguments); //500, 200, 'test'
// }
// createV(500, 200, 'test');

// function createB(width, height, color, ...args) {
//   let message = `盒子的宽度=${width},高度=${height},颜色=${color}`;
//   console.log(message); //盒子的宽度=200,高度=100,颜色=red
//   console.log(args); //[ '测试消息1', '测试消息2' ]
// }
// createB(200, 100, 'red', '测试消息1', '测试消息2');
