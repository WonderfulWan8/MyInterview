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

// 异步 (callback 回调函数)
// 异步不会阻塞后面的函数
console.log(100);
setTimeout( function(){
    console.log(200);
})
console.log(300);
// 100 300 200

// 同步
console.log(100);
alert(200);
console.log(300);
// 100 200 300


// 异步应用场景
//  网络请求，如ajax图片加载
//  定时任务，如setTimeout()
