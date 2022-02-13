// 值类型
let a = 100
let b = a
a = 200
console.log(b);//100

// 引用类型
let c = { age: 20 };
let d = c;//引用类型，赋值后d和c指向同一片内存空间 所以d改值c也会改
d.age = 21;
console.log(c.age);

// 注：为什么值类型需要赋值在地址里面?
// 因为引用类型数据复杂，占用空间多，所以需要在内存单独开辟空间
// 而值类型只是一个值，赋上去就可以了

// 常见值类型
let a;//undefined
const s = 'abc';
const n = 100;
const b = true;
const s = Symbol('s');

// 常见引用类型
const obj = { x: 100 };
const arr = ['a', 'b', 'c']
const n = null // 特殊引用类型，指针指向为空地址
// 特殊引用类型，但不用于存储数据，所以没有“拷贝、复制函数”这一说
function fn() {}



// 题目
const obj1 = { x: 100, y: 200 };
const obj2 = obj1;
let x1 = obj1.x;
obj2.x = 101;
x1 = 102
console.log(obj1);//{ x: 101 }