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
let es6 = [
  '1.let const var 的区别',
  '2.如果new一个箭头函数会怎样',
  '3.箭头函数和普通函数的区别',
  '4.ES6有哪些新增特性',
  '5.for in 和 for of的区别',
];
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

// 米小姐，您好，我可以接受外包。
// 然后我也想和您简单聊一下我的想法，
// 首先，我并不是刻意隐瞒我的学历是专升本，因为智联上的在线简历没有将我的信息同步过去。
// 其次，即使是专升本，我在本、专科内能拿到前百分之一人才有的国家奖学金，且绩点排名都是专业第一、前五，我做的并不比别人差。
// 最后，我明白咱们是国资性质的企业，但是不论是外包还是正式编制，最终都会落实和体现在工作能力上, 我对自己的能力有信心，如果我是个庸才，即使有编制，试用期也不一定能过。
// 所以，我想再争取一下，希望您能给我一个机会，让我用实际的工作能力来证明自己。

// 如果说因为学历的问题公司这边实在不能接受，我也向您道一声抱歉，因为我的疏忽耽误了您和面试官的宝贵时间。
// 您这边实在为难的话，我
