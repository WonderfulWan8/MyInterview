// console.log(...[1, 2, 3]);
// console.log(1, ...[2, 3, 4], 5);

// const a1 = [1, 2];
// const a2 = a1;
// a2[0] = 2;
// const a3 = a1.concat;
// a3[0] = 1;
// const a4 = [...a1];
// a4[0] = 3;
// console.log(a1);

// const arr1 = ['a', 'b'];
// const arr2 = ['c'];
// const arr3 = ['d', 'e'];
// arr1.concat(arr2, arr3);
// [...arr1, ...arr2, ...arr3];

// const a1 = [{ foo: 1 }];
// const a2 = [{ bar: 2 }];

// // 浅拷贝
// const a3 = a1.concat(a2);
// const a4 = [...a1, ...a2];
// console.log(a3[0] === a1[0]);
// console.log(a4[0] === a1[0]);

// let list = [1, 2, 3];
// (a = list[0]), (rest = list.slice(1));
// console.log(a);
// console.log(rest);

// const [first, ...rest] = [1, 2, 3, 4];
// console.log('first: ', first);
// console.log('rest: ', rest);

// const [first, ...rest] = [];
// const [first1, ...rest1] = ['foo'];

// [...'hello']; //将字符串转换为数组

// let arrlike = {
//   0: '1',
//   1: '2',
//   2: '3',
//   length: 3,
// };
// [].slice.call(arrlike);
// Array.from(arrlike);

// Array.of(3, 11, 8);
// Array.of(3);
// Array.of(3).length;

// Array();
// Array(3);
// Array(3, 11, 8);

// [1, 2, 3, 4, 5].copyWithin(0, 3);
// [1, 2, 3, 4, 5].copyWithin(0, 2);

// [1, 2, 3, 4, 5].copyWithin(0, 3, 4);

// [1, 4, -5, 10].find((n) => {
//   return n < 0;
// });
// [1, 5, 10, 15].find((e) => {
//   return e > 10;
// });
// [1, 5, 10, 15].find((e) => {});
// // [1, 2, 3].fill('a'); //['a','a','a']
// let arr = new Array(3).fill({ name: 'Mike' });
// console.log('arr: ', arr); //arr: [{ name: 'Mike' }, { name: 'Mike' }, { name: 'Mike' }];
// arr[0].name = 'tom';
// console.log('arr: ', arr); //arr: [{ name: 'tom' }, { name: 'tom' }, { name: 'tom' }];

// for (let index of ['a', 'b'].keys()) {
//   console.log('index: ', index);
// }
// for (let value of ['a', 'b'].values()) {
//   console.log('value: ', value);
// }
// for (let entry of ['a', 'b'].entries()) {
//   console.log('entry: ', entry);
// }

// [1, 2, 3].includes(2);
// [1, 2, 3].includes(4);
// [1, 2, NaN].includes(NaN);
// const contains = () => {
//   Array.prototype.includes ? (arr, value) => arr.includes(value) : (arr, value) => arr.some((el) => el === value)();
// };

// let arr = [1, 2, [3, [4, [5]]]];
// arr.flat(Infinity);
// function myFlatten(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(myFlatten(arr[i]));
//     } else {
//       result = result.concat(arr[i]);
//     }
//   }
//   return result;
// }
// console.log('myFlatten(arr): ', myFlatten(arr));

// [2, 3, 4].flatMap((x) => {
//   return [x, x * 3];
// });

// 相当于 [[2, 6], [3, 9], [4, 12]].flat();

// const arr = ['peach', 'straw', 'apple', 'spork'];
// const stableSorting = (s1, s2) => {
//   if (s1[0] < s2[0]) {
//     return -1;
//   }
//   return 1;
// };
// arr.sort(stableSorting);

// async function testAsy() {
//   return 'hello world';
// }
// let result = testAsy();
// console.log(result);
// result.then((e) => {
//   console.log('e: ', e);
// });

// console.log('script start');
// let promise1 = new Promise(function (resolve) {
//   console.log('promise1');
//   resolve(); //微1
//   console.log('promise1 end');
// }).then(function () {
//   console.log('promise2');
// });
// setTimeout(function () {
//   console.log('settimeout'); //宏2
// });
// console.log('script end');

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start'); //
async1();
console.log('script end');
// s..start a...start a...end s...end async2
