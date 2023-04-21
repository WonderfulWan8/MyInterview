/**
 * 构造函数
 */
var arr = new Array(2);
console.log('arr: ', arr);

console.log(new Array());
console.log(new Array(1));
console.log(new Array(2));
// console.log(new Array(3.2));//报错

// 如果以单个非数值，比如字符串，布尔值对象等作为参数，
// 则该参数是返回新数组的成员
console.log(new Array('123')); //[ '123' ]
console.log(new Array(false)); //[ false ]
console.log(new Array([])); //[[]];

// 多参数时，所有参数都是返回新数组的成员
console.log(new Array(1, 2, 3)); //[ 1, 2, 3 ]
console.log(new Array(true, false)); //[ true, false ]
console.log(new Array('4', '5', '[')); //[ '4', '5', '[' ]

const b = [1, 2, 3];
console.log(1 in b);

/**
 * 静态方法
 */
let a = [1, 2, 3];
console.log(typeof a); //object
console.log('Array.isArray(a);: ', Array.isArray(a)); //true

/**
 * 实例方法
 */
// valueOf toString
let c = [1, 2, [3, 4, 5]];
// 数组的valueof()返回数组本身
console.log(a.valueOf()); //[ 1, 2, 3 ]
console.log(a.toString()); //1,2,3
console.log(c.toString()); //1,2,3,4,5

// push pop shift unshift
// push用于在数组的末端添加一个或多个元素，并返回添加元素后数组的长度，该方法会改变原数组
console.log('a.push(4): ', a.push(4)); //4
// pop用于删除数组的最后一个元素，并返回该元素，该方法会改变原数组
console.log('a.pop(): ', a.pop()); //4
console.log('[].pop(): ', [].pop()); //对空数组使用pop会返回undefined而不是报错
/** pop和push结合 就组成了 栈（先进后出 */
// unshift用于在数组头部添加一个或多个元素，并返回添加后数组的长度，该方法会改变元素组
console.log('a.unshift(0): ', a.unshift(0));
// shift用于删除数组的第一个元素，并返回该元素，该方法会改变原数组
console.log('a.shift(): ', a.shift());
console.log('a: ', a);
let d;
while ((d = a.shift())) {}
console.log(a); //[]
/** push和shift结合 就组成了 队列（先进先出 */

// join
// join方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回，默认以逗号分隔
let e = [1, 2, 3, 4, 5, 6];
console.log('e.join(): ', e.join()); //e.join():  1,2,3,4,5,6
console.log("e.join(' | '): ", e.join('|')); //e.join(' | '):  1|2|3|4|5|6
// null,undefined或者空位，会被转化成空字符串
console.log('[undefined, null].join(): ', [undefined, null].join()); //  ,
console.log("['a', , 'b']: ", ['a', , 'b']);
//通过call方法可以让字符串或者类似数组的对象使用。
console.log("Array.prototype.join('HELLO', '-'):", Array.prototype.join.call('HELLO', '-')); // H-E-L-L-O

// concat
//concat 用于多个数组的合并。将新成员添加到元素组的后部，返回一个新数组，原数组不变。
console.log("['hello'].concat(['world']): ", ['hello'].concat(['world'])); //[ 'hello', 'world' ]
console.log("['HEELO'].concat(['WORLD'], ['!'])", ['HEELO'].concat(['WORLD'], ['!'])); //[ 'HEELO', 'WORLD', '!' ]
console.log('[].concat({a:1,b:2}): ', [].concat({ a: 1 }, { b: 2 })); // [ { a: 1 }, { b: 2 } ]
console.log('[2].concat({a:1},{c:3}): ', [2].concat({ a: 1 }, { c: 3 })); //[ 2, { a: 1 }, { c: 3 } ]
// 如果数组成员包括对象，contact方法返回当前数组的一个浅拷贝。修改原值会影响现有值
let obj = { a: 1 };
let oldArr = [].concat(obj);
console.log('oldArr: ', oldArr);
obj.a = 2;
console.log(oldArr[0].a); //2

// reverse
// reverse用于颠倒排列数组元素，返回改变后的数组，该方法会改变原有数组
let f = [1, 2, 3, 4, 5];
console.log('f.reverse(): ', f.reverse()); //[ 5, 4, 3, 2, 1 ]

// slice用于提取目标数组的一部分，返回一个新数组，原数组不变
// slice(a,b) a为起始位置 b为终止位置 如果不写b则默认返回到结尾
let g = [1, 2, 3, 4, 5];
console.log('g.slice(0,2): ', g.slice(0, 2)); //[ 1, 2 ]
// 如果参数是负数 则从后往前
console.log('g.slice(-2, -1): ', g.slice(-2, -1)); //[4]
// 如果第一个参数大于第二个参数 返回空数组
g.slice(2, 1); //[]
// slice的重要应用，将 类似数组的对象 转换为 数组
let objToArr = Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 });
console.log('objToArr: ', objToArr); //[ 'a', 'b' ]

// splice用于删除数组的一部分，并且可以在删除的位置添加新的元素，
// 返回值是被删除的元素，该方法会改变原数组
let h = [1, 2, 3, 4, 5];
h.splice(2, 3); //从2开始往后删3个 包含2
console.log(h); //[ 1, 2 ]
h.splice(1, 1, 1, 2, 3); // 从1开始往后删1个，并且插入123
console.log(h); //[ 1, 1, 2, 3 ]
h.splice(1, 0, 2.5); //在指定位置插入元素
console.log(h); //[ 1, 2.5, 1, 2, 3 ]

// sort 用于对数组成员进行排序，是按照字典顺序，排序后原数组将会被改变
// 对数字进行排序
let i = [199, 10, 2];
i.sort();
console.log('i: ', i); //[ 10, 199, 2 ]
i.sort(function (a, b) {
  return a - b;
});
console.log('i: ', i); //[ 2, 10, 199 ]
i.sort(function (a, b) {
  return b - a;
});
console.log('i: ', i); //[ 199, 10, 2 ]

[
  { name: '张三', age: 30 },
  { name: '李四', age: 24 },
  { name: '王五', age: 28 },
].sort(function (a, b) {
  return a.age - b.age;
});
/**
 * [
    {
        "name": "李四",
        "age": 24
    },
    {
        "name": "王五",
        "age": 28
    },
    {
        "name": "张三",
        "age": 30
    }
]
 */

// map方法将数组的所有成员依次传入函数参数，然后把每一次执行结果组成一个新数组返回，原数组没有变化
let j = [1, 2, 3];
let k = j.map((e) => {
  return (e *= 2);
});
console.log('k: ', k); //k:  [ 2, 4, 6 ]
//elem为当前成员的值，index为当前成员的位置，arr为原数组（[1, 2, 3]）。
j.map((index, ele, arr) => {
  return ele * index;
}); //[0, 2, 6]
// map接收第二个参数，用于改变this的指向
let z = [];
k.map((e) => {
  return this[e];
}, z);
console.log('z: ', z);

//forEach 与 map类似 但foreach不返回值 只用于操作数据，foreach不会改变原数组，无返回值
let l = k.forEach((e) => {
  return e * 2;
});
console.log('k: ', k); //k:  [ 2, 4, 6 ]
console.log('l: ', l); //undefined
