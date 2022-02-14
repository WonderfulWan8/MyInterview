// 函数作为返回值
// function create() {
//     const a = 100
//     return function(){
//         console.log(a);
//     }
// }
// let fn1 = create();
// const a = 200
// fn1()

// 函数作为参数被传递
function print(fn2){
    const b = 200
    fn2()   
}
const b = 100
function fn2(){
    console.log(b);
}
print(fn2);