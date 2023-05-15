// var person = {
//   name: '张三',
//   describe: function () {
//     return '姓名：' + this.name;
//   },
// };
// person.describe(); //姓名：张三

// var A = {
//   name: '张三',
//   describe: function () {
//     return '姓名：' + this.name;
//   },
// };
// var B = {
//   name: '李四',
// };
// B.describe = A.describe;
// console.log(B.describe()); //姓名：李四

// function f() {
//   return '姓名：' + this.name;
// }
// var c = {
//   name: '张三',
//   describe: f,
// };
// var d = {
//   name: '李四',
//   describe: f,
// };
// console.log(c.describe()); //姓名：张三
// console.log(d.describe()); //姓名：李四

// var e = {
//   name: '王五',
//   describe: function () {
//     return '姓名' + this.name;
//   },
// };
// var name = '赵6';
// var f = e.describe;
// console.log('f(): ', f());
// var obj = function (p) {
//   this.p = p;
// };
// var o = new obj('hello world');
// console.log(o.p);
// var obj = {
//   foo: function () {
//     console.log(this);
//   },
// };
// obj.foo(); //obj

// (obj.foo = obj.foo)();

// var o = {
//   f1: function () {
//     console.log(this);
//     var f2 = (function () {
//       // 没有明确设置执行上下文,默认使用全局对象
//       console.log(this);
//     })();
//   },
// };
// o.f1();

// var o1 = {
//   f1: function () {
//     console.log(this);
//     let vm = this;
//     var f2 = (function () {
//       console.log(vm);
//     })();
//   },
// };
// o1.f1();

// var o2 = {
//   v: 'hello',
//   p: ['a1', 'a2'],
//   f: function f() {
//     this.p.forEach(function (item) {
//       console.log(this.v + '' + item);
//     });
//   },
// };
// o2.f(); //undefineda1 undefineda2

// var obj = {};
// var f = function () {
//   console.log(this);
// };
// f();
// f.call(obj);

// var n = 123;
// var obj1 = { n: 456 };
// function a() {
//   console.log(this.n);
// }
// a.call();
// a.call(null);
// a.call(undefined);
// a.call(window);
// a.call(obj1);

// function add(a, b) {
//   return a + b;
// }
// add.call(1, 2);
var obj = {
  a: 10,
  b: this.a + 10,
  fn: function () {
    return this.a;
  },
};
console.log(obj.b);
console.log(obj.fn(), obj.fn);
