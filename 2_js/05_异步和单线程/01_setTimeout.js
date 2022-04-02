// console.log(1);
// setTimeout( function(){
//     console.log(2);
// }, 1000);
// console.log(3);
// setTimeout( function(){
//     console.log(4);
// },0);
// console.log(5);
// 1 3 5 4 2
console.log("===================================");

// 异步
console.log(100);
setTimeout( function(){
    console.log(200);
})
console.log(300);
// 100 300 200