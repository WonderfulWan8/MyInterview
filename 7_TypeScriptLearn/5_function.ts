// ---------------------------------------------------------------------------------
function add(x:any, y:any){
    return x+y;
}
let myAdd = function(x:any, y:any){
    return x+y;
}
let z = 100;
function addToZ(x:any,y:any){
    return x+y+z;
}
// ---------------------------------------------------------------------------------
function add1(x: number, y: number): number{
    return x+y;
}

let myAdd1:( x: number, y: number ) => 
number = function(x: number, y: number):number{
    return x+y
}

// ---------------------------------------------------------------------------------
function buildName(firstName: string, lastName?: string){
    if(lastName){
        return firstName + " " + lastName;
    }else{
        return firstName;
    }   
}

function buildName1(firstName: string, lastName = "Smith"){
    return firstName + " " + lastName;
}
let resul1 = buildName1("Bob");
console.log(buildName1("Bob"));//Bob Smith

let resul2 = buildName1('Bob',undefined);
console.log(resul2);//Bob Smith
// ---------------------------------------------------------------------------------

function buildName3(firstName: string,...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);// Joseph Samuel Lucas MacKinzie
// ---------------------------------------------------------------------------------

interface Card{
    suit: string;
    card: number;
}
interface Deck{
    suits: string[];
    cards: number[];
    createCardPicker( this: Deck ): ()=> Card;
}
let deck1: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(){
        return () =>{
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };        }
    }
}