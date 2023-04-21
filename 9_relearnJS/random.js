let data_type = [
  '1.javascript有哪些数据类型，它们的区别？',
  '2.数据类型检测的方式有哪些',
  '3.判断数组的方式有哪些',
  '4.null和undefined区别',
  '5.instanceof操作符的实现原理及实现',
  '6.为什么0.1+0.2 !== 0.3? 如何让其相等？',
  '7.typeof NaN 的结果是什么',
  '8.其它值到字符串的转换规则',
  '9.其他值到数字值的转换规则',
  '10.其他值到布尔类型的值的转换规则',
  '11.Object.is()与比较操作符 "===" 、"=="的区别',
  '12.如何判断一个对象是空对象',
];
let es6 = ['1.let const var 的区别', '2.如果new一个箭头函数会怎样', '3.箭头函数和普通函数的区别'];
let js_basic = [
  '1.new操作符的实现原理',
  '2.数组有哪些原生方法',
  '3.什么是DOM和BOM',
  '4.为什么函数的arguments参数是类数组不是数组？如何遍历类数组？',
  '5.对类数组的理解，如何转化为数组',
  '6.对AJAX的理解，实现一个AJAX请求',
  '7.JavaScript为什么要进行变量提升，它',
];
let yuanxing = [
  '1.对原型、原型链的理解',
  '2.原型链的终点是什么？如何打印出原型链的终点？',
  '3.如何获得对象非原型链上的属性',
];
let bibao_zhixing_zuoyongyu = ['1.对闭包的理解', '2.对作用域、作用域链的理解', '3.对执行上下文的理解'];
let this_call_bind_apply = ['1.对this的理解', '2.call appy bind的作用和区别', '3.实现call、apply及bind函数'];
let yibu = ['1.对promise的理解', '2.promise的基本用法', '3.对async/await的理解', '4.async/await对比promise的优势'];
let mianxiangduixiang = ['1.js创建对象的方式有哪些', '2.对象继承的方式有哪些'];
let garbage_collection = ['1.浏览器垃圾回收机制'];

function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  console.log(arr[index]);
}
getRandom(data_type);
getRandom(es6);
getRandom(js_basic);
getRandom(yuanxing);
getRandom(bibao_zhixing_zuoyongyu);
getRandom(this_call_bind_apply);
getRandom(yibu);
getRandom(mianxiangduixiang);
getRandom(garbage_collection);
