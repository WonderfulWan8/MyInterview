/*
 * @Descripttion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-18 15:15:45
 * @LastEditTime: 2022-03-18 16:10:57
 */
function printLabel( labelledObj: { label: string } ){
    console.log( labelledObj.label );
}

let myObj = { size: 10, label:'Size 10 Object' };
printLabel(myObj);
// ---------------------------------------------------------------------------------

// 好似一个要求，要求里面有label属性，且类型为string
interface LabelledValue{
    label: string;
}
// 对形参labelledObj 做 labelledValue要求
function printLabel1(labelledObj: LabelledValue){
    console.log(labelledObj.label);
}
let myObj1 = { size: 10, label: 'Size 10 Object' };
printLabel1(myObj1);

// ---------------------------------------------------------------------------------

interface SquareConfig{
    color?: string;
    width?: number;
}
function createSquare( config: SquareConfig ) : {color: string;
area: number} {
    let newSquare = { color: 'white', area: 100 };
    if( config.color ){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare( {color: "black"} );
// console.log(mySquare);//{ color: 'black', area: 100 }
let mySquare1 = createSquare({color: "white",width:100});
// console.log(mySquare1);//{ color: 'white', area: 10000 }


// ---------------------------------------------------------------------------------

// interface Point{
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = { x: 10, y: 20 };
// // p1.x = 5;

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;

// // ro[0] = 12;
// // ro.push(5);
// // ro.length = 100;
// // a = ro;

// a = ro as number[];
// ---------------------------------------------------------------------------------
function printLabe2( labelledObj: {label: string} ){
    console.log(labelledObj.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabe2(myObj2);

// ---------------------------------------------------------------------------------

interface LabelledValue{
    label: string;
}
function printLabe3(labelledObj: LabelledValue){
    console.log(labelledObj.label);
}

interface SquareConfig1{
    color?:string;
    width?:number;
}
function createSquare1( config: SquareConfig):{
    color: String;
    area: Number;
}{
    let newSquare = { color: "white", area: 100 };
    if(config.color){
        newSquare.color = config.color
    }
    if(config.width){
        newSquare.area = config.width;
    }
    return newSquare;
}
let mySquare2 = createSquare({color: "black"});
console.log(mySquare2);

interface SquareConfig{
    color?: string;
    width?: number;
}
function createSquare2(config: SquareConfig):{
    color: string;
    area: number;
} {
    let newSquare = { color: "white", area: 100 }
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// ---------------------------------------------------------------------------------

interface Point{
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 5 };
// p1.x = 5;

// ---------------------------------------------------------------------------------

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;

// ---------------------------------------------------------------------------------
interface SquareConfig3{
    color?: string;
    width?: number;
}
function createSquare3( config: SquareConfig3 ):{
    color: string;
    area: number;
}{
    return null;
}
// let mySquare3 = createSquare( {colur:"red", width:100} )
let mySquare4 = createSquare( {width: 100, opacity: 0.5} as SquareConfig );
// ---------------------------------------------------------------------------------

interface SearchFunc{
    ( source:string, subString: string ):boolean
}
let mySearch: SearchFunc;
mySearch = function(souce: string, subString: string){
    let result = souce.search(subString);
    return result > -1;
}
let mySearch1: SearchFunc;
mySearch1 = function(src, sub){
    let result = src.search(sub);
    return result > -1;
}  

// ---------------------------------------------------------------------------------
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob","Fred"];
let myStr: string = myArray[0];

// ---------------------------------------------------------------------------------
interface ClockInterface{
    currentTime: Date;
}
class Clock implements ClockInterface{
    currentTime: Date;
    constructor(h: number, m: number){

    }
}
interface ClockInterface2{
    currentTime: Date;
    setTime(d: Date);
}
class Clock2 implements ClockInterface2{
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number){

    }
}
// ---------------------------------------------------------------------------------
interface Shape{
    color: string;
}
// interface Square extends Shape{
//     sideLength: number;
// }
// let myShape = <Square>{};
// myShape.color = "red";
// myShape.sideLength = 10;

interface PenStroke{
    penWidth: number;
}
interface Square extends Shape, PenStroke{
    sideLength: number;
}
let myShape2 = <Square>{};
myShape2.color = '1';
myShape2.sideLength = 123;
myShape2.penWidth = 12;
// ---------------------------------------------------------------------------------

interface Counter{
    ( start: number ):string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter{
    let counter = <Counter>function(start: number){};
    counter.interval = 123;
    counter.reset = function(){};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// ---------------------------------------------------------------------------------

class Control{
    private state: any;
}
interface SelectableControl extends Control{
    select(): void;
}
class Button extends Control implements SelectableControl{
    select() {}
}
class TextBox extends Control{
    
}