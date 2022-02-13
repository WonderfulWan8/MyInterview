class Student {
    constructor(name, number){
        this.name = name;
        this.number = number;
    }
    sayHi(){
        console.log(`姓名：${this.name},学号：${this.number}`);
    }
}

// 通过类 new 声明对象/实例
const xialuo = new Student('夏洛',100);
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi();

const madongmei = new Student('马冬梅',101);
console.log(madongmei.name);
console.log(madongmei.number);
madongmei.sayHi();

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
class Student1 extends People{
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


const xialuo1 = new Student1('夏洛',100);
console.log(xialuo1.name);
console.log(xialuo1.number);
xialuo1.eat();
xialuo1.sayHi();

const madongmei1 = new Student1('马冬梅',101);
console.log(madongmei1.name);
console.log(madongmei1.number);
madongmei1.eat();
madongmei1.sayHi();

const lilaoshi = new Teacher('李老师','math');
console.log(lilaoshi.name);
console.log(lilaoshi.major);
lilaoshi.teach();
lilaoshi.eat();