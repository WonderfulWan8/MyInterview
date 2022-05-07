/*
 * @Descripttion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-18 09:17:33
 * @LastEditTime: 2022-03-18 15:13:06
 */
// function greeter(person){
//     return 'Hello, ' + person;
// }
// let user = 'Jane User';
// console.log( greeter(user) );

let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let name1: string = "bob";
let age: number = 37;
let sentence: string = `Hello, my name is ${name1}`

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// let x: [string ,number];
// x = ['hello', 10];
// x = [10,'hello']//错误 ，需按照规定的类型进行

// 相当于自己定义一种变量类型
enum Color{Red, Green, Blue}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;//可以修改类型

let notSure1: any = 4;
notSure.ifItExists();

function warnUser(): void{
    console.log("This is my waring message");
}

function error(message: string): never{
    throw new Error(message);
}
function fail(){
    return error("Something failed");
}
function f() {
    var message = 'Hello World';
    return message;
}

function f1(){
    var a = 10;
    return function g(){
        var b = a+1;
        return b;
    }
}
var g = f();
g();

let someValue: any = "this is a string";
let strLength: number = ( <string>someValue ).length;

let someValue1: any = "this is a string";
let strLength1:number = ( someValue1 as string ).length;