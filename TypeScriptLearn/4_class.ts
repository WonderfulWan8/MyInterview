class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return 'Hello, ' + this.greeting;
    }
}
let getter = new Greeter("world");
console.log(getter.greet());// Hello, world
// ---------------------------------------------------------------------------------

class Animal{
    move( distanceInMeters: number = 0 ){
        console.log(`Animal moved ${distanceInMeters}m`);
    }
}
class Dog extends Animal{
    bark() {
        console.log(' Woof! Woof! ');
    }
}
const dog = new Dog();
dog.bark();//Woof !Woof!
dog.move(20);// Animal moved 20m
dog.bark();//Woof!Woof!
// ---------------------------------------------------------------------------------

class Animal1 {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}
class Snake extends Animal1{
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal1{
    constructor(name: string){
        super(name);
    }
    move(distanceInMeters = 45){
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

// ---------------------------------------------------------------------------------
class Animal3 {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
    getName(){
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }
}
// new Animal3("f").name;// 私有属性不允许访问
class Rhino extends Animal3{
    constructor() {
        super("Rhino");
    }
    getName(){
        return super.getName();
    }
    setName(name: string){
        super.setName(name);
    }
}
class Employee{
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
}
let animal = new Animal3("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

console.log(rhino.getName());
// ---------------------------------------------------------------------------------
class Person{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
}
class Employeee extends Person{
    private department: string;
    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in 
        ${this.department}.`;
    }
}
let howard = new Employeee("Howard","Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);
// ---------------------------------------------------------------------------------
class Octopus{
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor( theName: string ){
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = '123';
// ---------------------------------------------------------------------------------
class Animal4 {
    constructor( private name: string ){

    }
    move(distanceInMeters: number){
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}
// ---------------------------------------------------------------------------------
let passcode = "secret passcode";
class Employee2{
    private _fullName: string;
    get fullName():string{
        return this._fullName;
    }
    set fullName(newName: string){
        if(passcode && passcode == 'secret passcode' ){
            this._fullName = newName;
        }else{
            console.log("Error Unauthorized update of employee!");
        }
    }
}
let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if(employee2.fullName){
    console.log(employee2.fullName);
}
