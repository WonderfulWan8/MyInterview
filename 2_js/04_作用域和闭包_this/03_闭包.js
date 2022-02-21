// 函数作为返回值
// function create(){
//     const a = 100
//     return function(){//此时函数未执行，仅作为返回值
//         console.log(a);
//     }
// }
// let fn1 = create();
// const a = 200
// fn1()//100
 //此时fn1就是function，执行fn1就是执行function，一层一层向外找a，最近的是100，输出100

// 函数作为参数被传递
function print(fn2){
    const b = 200
    fn2()   
}
const b = 100
function fn2(){
    console.log(b);
}
// fn2作为参数传递，到print执行，调用时向上级找。 
print(fn2);

// 闭包：自由变量的查找，是在函数定义的地方，
// 向上级作用域查找，不是在执行的方向。