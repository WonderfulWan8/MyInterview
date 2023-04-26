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

const a1 = [{ foo: 1 }];
const a2 = [{ bar: 2 }];

// 浅拷贝
const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];
console.log(a3[0] === a1[0]);
console.log(a4[0] === a1[0]);

// let list = [1, 2, 3];
// (a = list[0]), (rest = list.slice(1));
// console.log(a);
// console.log(rest);

// const [first, ...rest] = [1, 2, 3, 4];
// console.log('first: ', first);
// console.log('rest: ', rest);

const [first, ...rest] = [];
const [first1, ...rest1] = ['foo'];
