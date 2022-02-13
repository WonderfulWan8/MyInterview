/**
 * 继承
 * extends 实现
 * super 调用父类方法
 * 扩展或者重写方法
 */

 class People {
    constructor(name){
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating something`);
    }
}
// 子类1
class Student extends People{
    constructor( name, number){
        super(name);//调用父类方法，由父类处理
        this.number = number;
    }
    sayHi(){
        console.log(`姓名：${this.name},学号：${this.number}`);
    }
}
// 子类2
class Teacher extends People{
    constructor(name, major){
        super(name);
        this.major = major;
    }
    teach(){
        console.log(`${this.name} teach ${this.major}`);
    }
}
const xialuo = new Student('夏洛', 100);
const madongmei = new Student('马冬梅',101);

// class实际上的函数，可见语法糖
console.log( typeof People ); // function
console.log( typeof Student );// function
/**
 * 隐式原型 __proto__
 * 
 * 显示原型 prototype
 * 
 */
console.log( xialuo.__proto__ );// People {}
console.log( Student.prototype );;// People {}
console.log( xialuo.__proto__ === Student.prototype )// true

console.log( Student.prototype.__proto__ ); //Object
console.log( People.prototype );//Object
console.log( People.prototype === Student.prototype.__proto__ );//true

console.log( xialuo.hasOwnProperty('name') ); // true
console.log( xialuo.hasOwnProperty('sayHi') ); // false
console.log( xialuo.hasOwnProperty('eat') ); // false
console.log( xialuo.hasOwnProperty('hasOwnProperty') ); // false
xialuo.sayHi(); // 姓名：夏洛,学号：100