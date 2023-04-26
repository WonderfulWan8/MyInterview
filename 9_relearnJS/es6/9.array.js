// /**
//  * 构造函数
//  */
// var arr = new Array(2);
// console.log('arr: ', arr);

// console.log(new Array());
// console.log(new Array(1));
// console.log(new Array(2));
// // console.log(new Array(3.2));//报错

// // 如果以单个非数值，比如字符串，布尔值对象等作为参数，
// // 则该参数是返回新数组的成员
// console.log(new Array('123')); //[ '123' ]
// console.log(new Array(false)); //[ false ]
// console.log(new Array([])); //[[]];

// // 多参数时，所有参数都是返回新数组的成员
// console.log(new Array(1, 2, 3)); //[ 1, 2, 3 ]
// console.log(new Array(true, false)); //[ true, false ]
// console.log(new Array('4', '5', '[')); //[ '4', '5', '[' ]

// const b = [1, 2, 3];
// console.log(1 in b);

// /**
//  * 静态方法
//  */
// let a = [1, 2, 3];
// console.log(typeof a); //object
// console.log('Array.isArray(a);: ', Array.isArray(a)); //true

// /**
//  * 实例方法
//  */
// // valueOf toString
// let c = [1, 2, [3, 4, 5]];
// // 数组的valueof()返回数组本身
// console.log(a.valueOf()); //[ 1, 2, 3 ]
// console.log(a.toString()); //1,2,3
// console.log(c.toString()); //1,2,3,4,5

// // push pop shift unshift
// // push用于在数组的末端添加一个或多个元素，并返回添加元素后数组的长度，该方法会改变原数组
// console.log('a.push(4): ', a.push(4)); //4
// // pop用于删除数组的最后一个元素，并返回该元素，该方法会改变原数组
// console.log('a.pop(): ', a.pop()); //4
// console.log('[].pop(): ', [].pop()); //对空数组使用pop会返回undefined而不是报错
// /** pop和push结合 就组成了 栈（先进后出 */
// // unshift用于在数组头部添加一个或多个元素，并返回添加后数组的长度，该方法会改变元素组
// console.log('a.unshift(0): ', a.unshift(0));
// // shift用于删除数组的第一个元素，并返回该元素，该方法会改变原数组
// console.log('a.shift(): ', a.shift());
// console.log('a: ', a);
// let d;
// while ((d = a.shift())) {}
// console.log(a); //[]
// /** push和shift结合 就组成了 队列（先进先出 */

// // join
// // join方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回，默认以逗号分隔
// let e = [1, 2, 3, 4, 5, 6];
// console.log('e.join(): ', e.join()); //e.join():  1,2,3,4,5,6
// console.log("e.join(' | '): ", e.join('|')); //e.join(' | '):  1|2|3|4|5|6
// // null,undefined或者空位，会被转化成空字符串
// console.log('[undefined, null].join(): ', [undefined, null].join()); //  ,
// console.log("['a', , 'b']: ", ['a', , 'b']);
// //通过call方法可以让字符串或者类似数组的对象使用。
// console.log("Array.prototype.join('HELLO', '-'):", Array.prototype.join.call('HELLO', '-')); // H-E-L-L-O

// // concat
// //concat 用于多个数组的合并。将新成员添加到元素组的后部，返回一个新数组，原数组不变。
// console.log("['hello'].concat(['world']): ", ['hello'].concat(['world'])); //[ 'hello', 'world' ]
// console.log("['HEELO'].concat(['WORLD'], ['!'])", ['HEELO'].concat(['WORLD'], ['!'])); //[ 'HEELO', 'WORLD', '!' ]
// console.log('[].concat({a:1,b:2}): ', [].concat({ a: 1 }, { b: 2 })); // [ { a: 1 }, { b: 2 } ]
// console.log('[2].concat({a:1},{c:3}): ', [2].concat({ a: 1 }, { c: 3 })); //[ 2, { a: 1 }, { c: 3 } ]
// // 如果数组成员包括对象，contact方法返回当前数组的一个浅拷贝。修改原值会影响现有值
// let obj = { a: 1 };
// let oldArr = [].concat(obj);
// console.log('oldArr: ', oldArr);
// obj.a = 2;
// console.log(oldArr[0].a); //2

// // reverse
// // reverse用于颠倒排列数组元素，返回改变后的数组，该方法会改变原有数组
// let f = [1, 2, 3, 4, 5];
// console.log('f.reverse(): ', f.reverse()); //[ 5, 4, 3, 2, 1 ]

// // slice用于提取目标数组的一部分，返回一个新数组，原数组不变
// // slice(a,b) a为起始位置 b为终止位置 如果不写b则默认返回到结尾
// let g = [1, 2, 3, 4, 5];
// console.log('g.slice(0,2): ', g.slice(0, 2)); //[ 1, 2 ]
// // 如果参数是负数 则从后往前
// console.log('g.slice(-2, -1): ', g.slice(-2, -1)); //[4]
// // 如果第一个参数大于第二个参数 返回空数组
// g.slice(2, 1); //[]
// // slice的重要应用，将 类似数组的对象 转换为 数组
// let objToArr = Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 });
// console.log('objToArr: ', objToArr); //[ 'a', 'b' ]

// // splice用于删除数组的一部分，并且可以在删除的位置添加新的元素，
// // 返回值是被删除的元素，该方法会改变原数组
// let h = [1, 2, 3, 4, 5];
// h.splice(2, 3); //从2开始往后删3个 包含2
// console.log(h); //[ 1, 2 ]
// h.splice(1, 1, 1, 2, 3); // 从1开始往后删1个，并且插入123
// console.log(h); //[ 1, 1, 2, 3 ]
// h.splice(1, 0, 2.5); //在指定位置插入元素
// console.log(h); //[ 1, 2.5, 1, 2, 3 ]

// // sort 用于对数组成员进行排序，是按照字典顺序，排序后原数组将会被改变
// // 对数字进行排序
// let i = [199, 10, 2];
// i.sort();
// console.log('i: ', i); //[ 10, 199, 2 ]
// i.sort(function (a, b) {
//   return a - b;
// });
// console.log('i: ', i); //[ 2, 10, 199 ]
// i.sort(function (a, b) {
//   return b - a;
// });
// console.log('i: ', i); //[ 199, 10, 2 ]

// [
//   { name: '张三', age: 30 },
//   { name: '李四', age: 24 },
//   { name: '王五', age: 28 },
// ].sort(function (a, b) {
//   return a.age - b.age;
// });
// /**
//  * [
//     {
//         "name": "李四",
//         "age": 24
//     },
//     {
//         "name": "王五",
//         "age": 28
//     },
//     {
//         "name": "张三",
//         "age": 30
//     }
// ]
//  */

// // map方法将数组的所有成员依次传入函数参数，然后把每一次执行结果组成一个新数组返回，原数组没有变化
// let j = [1, 2, 3];
// let k = j.map((e) => {
//   return (e *= 2);
// });
// console.log('k: ', k); //k:  [ 2, 4, 6 ]
// //elem为当前成员的值，index为当前成员的位置，arr为原数组（[1, 2, 3]）。
// j.map((index, ele, arr) => {
//   return ele * index;
// }); //[0, 2, 6]

// //forEach 与 map类似 但foreach不返回值 只用于操作数据，foreach不会改变原数组，无返回值
// let l = k.forEach((e) => {
//   return e * 2;
// });
// console.log('k: ', k); //k:  [ 2, 4, 6 ]
// console.log('l: ', l); //undefined

// // filter 用于过滤数组成员，将满足条件的成员组成一个新数组返回，改方法不会改变原数组。
// [1, 2, 3, 4, 5].filter((e) => {
//   return e < 3;
// }); //[1, 2]
// [0, 1, 'a', false].filter(Boolean); // [1, 'a']
// [1, 2, 3, 4, 5].filter((ele, index, arr) => {
//   return index % 2 == 0;
// }); //[1, 3, 5]

// // some every 用于判断数组成员是否满足某种条件
// var arr = [1, 2, 3, 4, 5];
// arr.some((ele) => {
//   return ele > 3; //只要有一个符合 some函数返回值为true
// }); //true
// arr.every((ele) => {
//   return ele > 3; //全部符合，every返回值为true
// }); //false

// // reduce reduceRight 依次处理数组每个成员，最后累计成一个值，区别在于一个从左一个从右
// a是result b是item
// [1, 2, 3, 4, 5].reduce((a, b) => {
//   // console.log('a: ', a); a是前两个数的和
//   // console.log('b: ', b); b是后一个数
//   return a + b;
// }); //5

// // indexof lastindexof

// var users = [
//   { name: 'tom', email: 'tom@example.com' },
//   { name: 'peter', email: 'peter@example.com' },
// ];
// users
//   .map((e) => {
//     return e.email;
//   })
//   .filter((e) => {
//     return e[0] === 't';
//   })
//   .forEach((e) => {
//     console.log(e);
//   });

// let str = '1232223123413';
// let arr = Array.from(str);
// let count = 0;
// arr.forEach((e) => {
//   if (e == 2) {
//     count++;
//   }
// });
// console.log('count: ', count);

// let obj = {};
// Array.prototype.forEach.call(str, (e) => {
//   if (typeof obj[e] === 'undefined') {
//     obj[e] = 1;
//   } else {
//     obj[e]++;
//   }
// });
// console.log('obj: ', obj);

// [...str].filter((i) => {
//   return i == 2;
// }).length;

// let set = new Set();
// let arr3 = [];
// Array.prototype.forEach.call(str, (e) => {
//   set.add(e);
// });
// for (let value of set) {
//   arr3.push({ val: value, count: 0 });
// }
// Array.prototype.forEach.call(str, (e) => {
//   arr3.forEach((ele) => {
//     if (ele.val === e) {
//       ele.count++;
//     }
//   });
// });

// console.log('arr3: ', arr3);

// // str.split('2')// ['1', '3', '', '', '31', '3413']
// str.split('2').length - 1;

// let arr4 = [1, 3, 4, 5];
// let arr5 = arr4.map((ele) => {
//   return ele;
// });
// arr5.splice(1, 0, 2);
// console.log('arr5: ', arr5);

// // 移出数组arr（[1,2,3,4,2,5,6,2,7,2]）中与2相等的元素，并生成一个新数组，不改变原数组。
// let arr6 = [1, 2, 3, 4, 2, 5, 6, 2, 7, 2];
// let arr7 = arr6.filter((ele) => {
//   return ele !== 2;
// });
// arr7.splice(1, 0, 2);
// console.log('arr7: ', arr7);

/**
//  * 1.数组的去重
//  */
// let arr = [1, 2, 3, 4, 3, 7, 7];
// let set = new Set([...arr]); //set:  Set(5) { 1, 2, 3, 4, 7 }

// let newArr = [];
// arr.forEach((ele) => {
//   if (newArr.indexOf(ele) == -1) {
//     newArr.push(ele);
//   }
// });
// console.log('newArr: ', newArr); //[ 1, 2, 3, 4, 7 ]

// /**
//  * 2.数组的扁平化
//  */
// let res = [1, 2, [3, [4, [5]]]];
// // res.flat(Infinity); //[1,2,3,4,5] Infinity代表扁平化最大层 不传参默认一层

// function reduceFlatten(arr) {
//   return arr.reduce((result, item) => {
//     return result.concat(Array.isArray(item) ? reduceFlatten(item) : item);
//   }, []);
// }
// console.log(reduceFlatten(res)); //[ 1, 2, 3, 4, 5 ]

// function myFlatten(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(myFlatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(myFlatten(res)); //[ 1, 2, 3, 4, 5 ]

// /**
//  * 3.取数组最大值
//  */
// let arr2 = [1, 2, 3, 4, 5];
// Math.max(...arr2);

// arr2.sort((a, b) => a - b);
// console.log('arr2[arr2.length - 1]: ', arr2[arr2.length - 1]); //5

// /**
//  * 4.数组是否包含指定元素
//  */
// let animals = ['A', 'B', 'C', 'D'];
// animals.includes('A'); // true

// animals.indexOf('A') != -1;

// /**
//  * 5.删除数组中的指定元素
//  */
// let selectData = [
//   { depId: 44, name: '西安' },
//   { depId: 33, name: '北京' },
//   { depId: 23, name: '上海' },
//   { depId: 35, name: '广州' },
//   { depId: 64, name: '深圳' },
// ];

// // 要在数组中删除的数据
// let data = { depId: 23, name: '上海' };

// let sub;
// selectData.forEach((ele, index) => {
//   if (ele.depId == data.depId) {
//     sub = index;
//   }
// });
// selectData.splice(sub, 1);
// console.log('selectData: ', selectData);

let res = [1, 2, [3, [4, [5]]]];
// res.flat(Infinity);

function myflatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(myflatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
res = myflatten(res);
console.log('res: ', res);

let max = Math.max(...res);
console.log('max: ', max);

res.sort((a, b) => {
  return a - b;
});
console.log(res[res.length - 1]);

console.log('res.includes(5): ', res.includes(5));
console.log('res.indexOf(5) != -1: ', res.indexOf(5) != -1);

let obj = {};
for (let i = 0; i < res.length; i++) {
  if (typeof obj[res[i]] === 'undefined') {
    obj[res[i]] = 1;
  } else {
    obj[res[i]]++;
  }
}
console.log('obj: ', obj);

let set = new Set();
res.forEach((e) => {
  set.add(e);
});
console.log('set: ', set);
let newArr = [];
set.forEach((e) => {
  newArr.push({ val: e, count: 0 });
});

for (let i = 0; i < res.length; i++) {
  newArr.forEach((e) => {
    if (e.val == res[i]) {
      e.count++;
    }
  });
}

console.log('newArr: ', newArr);
