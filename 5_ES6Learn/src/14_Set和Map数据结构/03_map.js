/*
 * @Descripttion: 
 * @version: 
 * @Author: fudengwei_2202472
 * @Date: 2022-03-17 15:51:55
 * @LastEditTime: 2022-03-17 17:41:15
 */
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content');
console.log(m.get(o));//content
console.log(m.has(o));//true\
console.log(m.delete(o));//true
console.log(m.has(o));// false
//----------------------------------------------------------------------------
const map = new Map([
    ['name','张三'],
    ['title','Author'],
]);
console.log(map.size);//2
console.log(map.has('name'));//true
console.log(map.get('name'));//张三
console.log(map.has('title'));//true
console.log(map.get('title'));//Author
//----------------------------------------------------------------------------
const items = [
    ['name','张三'],
    ['title','Author'],
];

const map2 = new Map();
items.forEach( 
    ( [key, value] )=>{
        map2.set(key, value);
    } 
);
//Map(2) { 'name' => '张三', 'title' => 'Author' }
console.log(map2);
//----------------------------------------------------------------------------

const set3 = new Set( [
    ['foo', 1],
    ['bar', 1]
] );
const m1 = new Map(set3);//1
console.log(m1.get('foo'));
const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
console.log(m3.get('baz'));//3
//----------------------------------------------------------------------------
const map3 = new Map();
// map3.set([1,'aaa']).set([1,'bbb']);
map3.set(1,'aaa');
map3.set(1,'bbb');// 如果重复赋值，后一个会覆盖前一个
console.log(map3.get(1));
//----------------------------------------------------------------------------
// 读取未知的键，则返回undefined
console.log(new Map().get('123'));//undefined
//----------------------------------------------------------------------------
const map5 = new Map();
map5.set(['a'],1);
console.log( map5.get(['a']) );//undefined
// 注：此处get看似是同一个数组，但实则指向不同内存地址

let k1 = ['a'];
let k2 = ['b'];
map5.set(k1,1);
map5.set(k2,2);
console.log( map5.get(k1) );//1
console.log( map5.get(k2) );//2
// 注：此处两个数组则均为指向同一地址
//----------------------------------------------------------------------------
let map6 = new Map();
map6.set(-0, 123);
console.log( map6.get(+0) );// 123

map6.set(true,1);
map6.set('true',2);
console.log(map6.get(true));//1
console.log(map6.get('true'));//2

map6.set(undefined,1);
map6.set(null,2);
console.log(map6.get(undefined));//1
console.log(map6.get(null));//2
//----------------------------------------------------------------------------

const map7 = new Map();
map7.set('foo', true);
map7.set('bar', false);
console.log(map7.size);

const m4 = new Map();
m4.set('ed');
//----------------------------------------------------------------------------

const map8 = new Map([
    ['f','no'],
    ['q','yes']
]);
for( let key of map8.keys() ){
    console.log(key);
}
// f
// q

for ( let value of map8.values() ){
    console.log(value);
}
// no
// yes

for( let entire of map8.entries() ){
    console.log(entire);
}
// [ 'f', 'no' ]
// [ 'q', 'yes' ]

//----------------------------------------------------------------------------

const map9 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

console.log([...map9.keys()]);//[ 1, 2, 3 ]
console.log( [...map9.values()] );//[ 'one', 'two', 'three' ]
console.log( [...map9.entries()] );//[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
console.log( [...map9] );//[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
//----------------------------------------------------------------------------
const map0 = new Map()
.set(1,'a')
.set(2,'b')
.set(3,'c');

// console.log(map0);
const mp1 = new Map( 
    [...map0].filter( ( [k, v] ) =>  k<3&&v!='b'   )
);
console.log("mp1:", mp1);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}
//----------------------------------------------------------------------------

const myMap = new Map().set(true,2).set({foo: 3}, ['abc']);
console.log([...myMap]);
//[ [ true, 2 ], [ { foo: 3 }, [ 'abc' ] ] ]

//----------------------------------------------------------------------------
// 将数组传入 Map 构造函数，就可以转为 Map。
new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
  ])
//----------------------------------------------------------------------------
function strMapToObj(strMap){
    let obj = Object.create(null);
    for( let [k, v] of strMap ){
        obj[k] = v;
    }
    return obj;
}
const myMap2 = new Map().set('yes',true).set('no',false);
console.log(strMapToObj(myMap2));
// { yes: true, no: false }

//----------------------------------------------------------------------------
let obj1 = {
    'a':'fuck',
    'b':'learn'
};

let myMap3 = new Map( Object.entries(obj1) );
console.log(myMap3);//{ 'a' => 'fuck', 'b' => 'learn' }
