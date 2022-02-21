Function.prototype.bind1 = function(){
    // 将参数解析为数组
    const args = Array.prototype.slice.call(arguments)
    // 获取this（取出数组第一项，数组剩余的就是传递的参数）
    const t = args.shift();
    const selt = this //当前函数

    // 返回一个函数
    return function() {
        // 执行原函数，并返回结果
        return self.apply(t, args);
    }
}

function fn1(a, b, c){
    console.log('this', this);
    console.log(a, b, c);
    return  'this is fn1 ';
}
const fn2 = fn1.bind( {x: 100}, 10, 20, 30 );
const res = fn2();
console.log(res);