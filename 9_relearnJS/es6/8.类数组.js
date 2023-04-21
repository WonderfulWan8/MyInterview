// 遍历类数组
// 1 使用call将数组的方法应用到类数组上
// function foo() {
//   Array.prototype.forEach.call(arguments, (e) => {
//     console.log(e); //1 2 3 4 5
//   });
// }
// foo(1, 2, 3, 4, 5);

// // 2 使用Array.form()将类数组转换为数组
// function foo2() {
//   let arr = Array.from(arguments);
//   arr.forEach((e) => console.log(e)); //1 2 3 4 5
// }
// foo2(1, 2, 3, 4, 5);
// // 3 使用展开运算符将类数组转化为数组
// function foo3() {
//   let arr = [...arguments];
//   arr.forEach((e) => console.log(e)); //1 2 3 4 5
// }
// foo3(1, 2, 3, 4, 5);
