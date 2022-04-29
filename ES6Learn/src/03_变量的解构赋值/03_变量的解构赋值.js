// let a = 1;
// let b = 2;
// let c = 3;
// let [d, e, f] = [1, 2, 3];
// console.log(a, b, c, d, e, f);

// let [foo, [[bar],baz]] = [1,[[2],3]];
// console.log(foo);
// console.log(bar);
// console.log(baz);

// let [x, , y] = [1, 2, 3];
// console.log(x, y);

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head);
// console.log(tail);

// let [x, y, ...z] = ["a"];
// console.log(x);
// console.log(y);
// console.log(z);

// let [x, y] = [1, 2, 3];
// console.log(x);
// console.log(y);

// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a);
// console.log(b);
// console.log(d);

// let [x, y, z] = new Set( ['a','b','c'] );
// console.log(x);

// let [ foo = true ] = [];
// console.log(foo);

// let [x, y = 'b'] = ['a'];
// console.log(x, y);

// let [x, y = 'bd'] = ['c', undefined];
// console.log(x, y);

// let {foo, bar} = { foo: 'aaa', bar: 'bbb' };
// console.log(foo);
// console.log(bar);

// let {sin, cos} = Math;

// const { log } = console;
// log('Hello');


// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };// foo和baz绑定
// console.log(baz); 

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l} = obj;
// console.log(f);
// console.log(l);

// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz);
// console.log(foo);//ReferenceError: foo is not defined

// let obj = {
//     p: [
//         'hello',
//         { y: 'World'}
//     ]
// };
// let { p, p: [x, { y }] } = obj;
// console.log(x);
// console.log(y);
// console.log(p);
 
// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// }
// let { loc, loc:{ start}, loc: { start: { line } }, loc: { start: { column } } } = node;
// console.log(line);
// console.log(column);
// console.log(start);
// console.log(loc);

// let obj = {};
// let arr = [];
// ( { foo: obj.prop, bar: arr[0] }  = { foo: 123, bar: true });
// console.log(obj);
// console.log(arr[0]);

// const [a,b,c,d,e,f,g] = 'hello';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// let { length: len } = 'hello';
// console.log(len);

// let { toString: s } = 123;
// console.log(s);

// let { prop: x } = undefined;
// let { prop: y } = null;

// function add( [x, y] ){
//     return x + y;
// }
// console.log( );
// add[1, 2] 

// function add([x, y]){
//     return x + y;
// }
// add([1, 2]); // 3

// [ [1, 2], [3, 4] ].map( ([a,b]) => a+b );

// function move( {x = 0, y = 0} = {} ){
//     return [x ,y];
// }
// let arr = move( {x: 3, y: 8} );
// console.log(arr);

// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// console.log(x, y);

// function example() {
//     return [1, 2, 3];
// }
// let [a, b, c] = example();
// console.log(a);
// console.log(b);
// console.log(c);

// function example() {
//     return{
//         foo: 1,
//         bar: 2
//     }
// }
// let { foo, bar } = example();
// console.log(foo);
// console.log(bar);

// function f( [x,y,z] ){
//     return [x, y, z];
// }
//  let arr = f( [1, 2, 3] );
//  console.log(arr);

//  function f1( {x, y, z} ){
//      return [x, y, z];
//  }
//  let arr1 = f1( {z:1, y:2, x: 3} );
//  console.log(arr1);

// let jsonData = {
//     id: 42,
//     status: "ok",
//     data: [867, 5309]
// };
// let { id, status, data: number } = jsonData;
// console.log( id, status, number );

// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for( let [key, value] of map ){
//     console.log( key + "is" + value );
// }


// var arr = ['nick','freddy','mike','james'];
// arr.forEach( function(item,index,arr){
//     console.log("item:", item);
//     console.log("index:", index);
//     console.log("arr:", arr);
//     console.log("----------------");
// })
// var arr2 = ['nick','freddy','mike','james'];

// var arr = ['nick','freddy','mike','james']; 
// for( let index in arr ){
//     console.log( index + '.' + arr[index] );
// }
// console.log("------------------");

var userMsg = {
    nick:{
        name:'nick',
        age: 18,
        sex: '男'
    },
    freddy:{
        name:'freddy',
        age: 24,
        sex: '男'
    }
}
for( let key1 in userMsg ) {
    console.log("key1:",key1);
    for( let key2 in userMsg[key1] ){
        console.log("item:", userMsg[key1][key2]);
    }
}
