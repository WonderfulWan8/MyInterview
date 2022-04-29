function identity(arg: number): number{
    return arg;
}

// 注：类型变量T 只便是类型而不是值
function identity1<T>(arg: T):T{
    return arg;
}
    
let output = identity1<string>("myString");
console.log(output);//myString
let output1 = identity1<number>(123);
console.log(output1);// 123

// 会根据传入的参数自动判断T的类型
let output2 = identity1("myString");
console.log(typeof output2);// string

// ---------------------------------------------------------------------------------
// function identity3<T>(arg: T){
//     console.log(arg.length);
//     return arg;
// }

function loggingIdentity<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

function loggingIdentity1<T>(arg: Array<T>): Array<T>{
    console.log(arg.length);
    return arg;
}
// ---------------------------------------------------------------------------------

function identity4<T>(arg: T): T{
    return arg;
}
let myIdentity: <T>(arg: T) => T =identity4;
let myIdentity1: <U>(arg: U) => U = identity4;

// ---------------------------------------------------------------------------------
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 1;
myGenericNumber.add = function(x,y){return x+y}

let myGenericNumber1 = new GenericNumber<string>();
myGenericNumber1.zeroValue = 'Hello';
myGenericNumber1.add = function( x = myGenericNumber1.zeroValue,y = 'world'){return x+y}
console.log(myGenericNumber1.add);

// ---------------------------------------------------------------------------------

interface lengthwise{
    length: number;
}
function  loggingIdentity3<T extends lengthwise>(arg: T): T{
    console.log(arg.length);
    return arg;
}
// loggingIdentity3(3);
// ---------------------------------------------------------------------------------
function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// ---------------------------------------------------------------------------------
