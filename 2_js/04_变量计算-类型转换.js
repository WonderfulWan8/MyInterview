/**
 * 字符串拼接
 * ==运算符
 * if语句和逻辑运算
 */

const a = 100 + 10; //110
const b = 100 + '10' // '10010'
const c = true + '10' // 'true10'
console.log( 100 + parseInt('10') ); // 110

/**
 *  == 会隐式类型转换然后尝试相等，会导致很多意想不到的结果
 */
 console.log( 100 == '100' );// true
 console.log( 0 == '' );// true
 console.log( 0 == false );// true
 console.log( false == '');// true
 console.log( null == undefined );// true
/**
 * 解决方案：除了 == null 之外，其他一律都用 ===
 */
const obj = { x: 100 }
if( obj.a == null ){}
// 相当于
// obj.a === null || obj.a === undefind