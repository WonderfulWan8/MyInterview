// console.log("deepClone");
/** 
* 深拷贝
*/ 
const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing',
        a:{
            x:{
                y:{
                    z:100
                }
            }
        }
    },
    arr: ['a', 'b', 'c']
}
const obj2 = obj1;
obj2.address.city = 'shanghai';

console.log(obj1.address.city);//shanghai,
// 因为引用类型拷贝的是地址，所以obj2改了obj1也改了

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象 
 */
function deepClone( obj = {} ){
    // 非引用类型数据或null  
    if ( typeof obj !== 'object' || obj == null ) {
        return obj
    }
    // 初始化返回结果,判断类型
    let result;
    if( obj instanceof Array ){
        result = [];
    } else {
        result = {};
    }

    for( let key in obj ){
        // 判断遍历出来的key是否为obj本身定义数据结构里存在的
        if( obj.hasOwnProperty(key) ){
            // 递归
            result[key] = deepClone(obj[key]);
        }
    }
    // 返回结果
    return result;

}

const obj3 = deepClone(obj1);
obj3.address.city = 'chengdu';
console.log(obj1.address.city);
console.log(obj3.address.city);
// for( let i in obj3.address.a ){
//     console.log(obj3.address.a[i]);
// }
// console.log(obj3);
console.table(obj3.address.a);                                   