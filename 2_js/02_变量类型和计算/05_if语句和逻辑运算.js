/**
 * truly或者falsely变量是经过两次 ! 运算的变量 
 * 
 * truly变量： !!a === true的变量
 * 
 * falsely变量： !!a === false的变量
 */ 

// 以下是falsely变量。除此之外都是truly变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false

// truly变量
const a = true;
if(a){
    //...
}
const b = 100;
if(b){
    //...
}

// falsely变量
const c = '';//空字符串
if(c){
    //...
}
const d = null;//null
if(d){
    //...
}
let e;//undefined
if(e){
    //...
}


/**
 * 逻辑判断
 */
console.log( 10 && 0 );
console.log( '' || 'abc');
console.log( !window.abc );