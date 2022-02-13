// class Student {
//     constructor(name, number){
//         this.name = name;
//         this.number = number;
//     }
//     sayHi(){
//         console.log(`姓名：${this.name},学号：${this.number}`);
//     }
// }
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

console.log( xialuo instanceof Student  ); // true
console.log( xialuo instanceof People  );// true 是父类的类型
console.log( xialuo instanceof Object );// true object是所有class的父类
console.log( [] instanceof Array );// true
console.log( [] instanceof Object );// true
console.log( {} instanceof Object );// true 