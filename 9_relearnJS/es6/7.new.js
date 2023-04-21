function student(name, age) {
  this.name = name;
  this.age = age;
}
// new一个对象发生了什么
function createStu(constructor, ...args) {
  // 创建空对象
  let obj = Object.create(null);
  // 将空对象的__proto__指向构造函数的prototype
  Object.setPrototypeOf(obj, constructor.prototype);
  // 指向构造函数中的代码，构造函数的this指向该对象
  let result = constructor.apply(obj, args); //obj.constructor(args);相当于用传入的args作为参数创建一个新的对象
  //
  return result instanceof Object ? result : obj;
}

let s1 = createStu(student, '12', 'zjamhsam');
console.log('s1: ', s1);
