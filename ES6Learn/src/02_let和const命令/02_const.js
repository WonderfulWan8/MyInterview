// const PI = 3.1415;
// PI
// PI = 3;//TypeError: Assignment to constant variable.

// const声明时需要立即赋值
// const foo;//SyntaxError: Missing initializer in const declaration

// if(true){
//     // 仅在当前作用域生效
//     const MAX = 5;
// }
// console.log(MAX);

// if(true){
//     console.log(MAX);
//     const MAX = 5;
// }

// var message = 'Hello!';
// let age = 25;

// const message = 'good';
// const age = 30;

// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
// 小结：const本质是不允许指向变量的指针改变
// 所以指向引用类型对象的时候，里面内容改变就不能控制了
// const foo = {};
// foo.prop = 123;// 修改对象里的内容但是不修改指针指向不会报错
// foo.prop;

// foo = {};//报错；修改指向foo的指针就会报错

// const a = [];
// a.push('Hello'); //可执行
// a.length = 2;//可执行
// // a = ['Dave'];//报错
// console.log(a);

// 对象冻结
const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;

var constantize = (obj) =>{
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, i) =>{
        if( typeof obj[key] === 'object' ){
            constantize( obj[key] );
        }
    });
};

( typeof window !== 'undefined' )
