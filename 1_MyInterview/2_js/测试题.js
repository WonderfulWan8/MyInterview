// // 1、
// function Pig(){
//     this.age=99;
//     return 'abc';
//  }
//  var pig=new Pig();
//  console.log(pig) 

//  // 2、
//  var a=1;
//  function printA(){
//    console.log(this.a);
//  }
//  var obj={
//    a:2,
//    foo:printA,
//    bar:function(){
//      printA();
//    }
//  }

//  obj.foo(); 
//  obj.bar(); 
//  var foo=obj.foo;
//  foo(); 

//  // 3、
//  var fullName = 'language'
//  var obj = {
//    fullName: 'javascript',
//    prop: {
//      getFullName: function () {
//        return this.fullName
//      }
//    }
//  }
//  console.log(obj.prop.getFullName())
//  var test = obj.prop.getFullName
//  console.log(test())

//  // 4、
//  var val = 1
//  var json = {
//    val: 10,
//    dbl: function () {
//      val *= 2
//    },
//  }
//  json.dbl()
//  console.log(json.val + val)

//  // 5、
//  var num = 10 
//  var obj = { num: 20 }
//  obj.fn = (function (num) {
//    this.num = num * 3
//    num++
//    return function (n) {
//      this.num += n 
//      num++
//      console.log(num) 
//    }
//  })(obj.num)
//  var fn = obj.fn
//  fn(5)
//  obj.fn(10)
//  console.log(num, obj.num)

//  // 6、
//  var obj = {
//    _name: 'obj',
//    func() {
//      const arrowFunc = () => {
//        console.log(this._name)
//      }
//      return arrowFunc
//    },
//  }
//  obj.func()()
//  var func = obj.func
//  func()()
//  obj.func.bind({ _name: 'newObj' })()()
//  obj.func.bind()()()
//  obj.func.bind({ _name: 'bindObj' }).apply({ _name: 'applyObj' })()




// // 答案：

// // 1、Pig {age:99}

// // 2、2、1、1

// // 解释：

// // （1）obj.foo()，printA直接被obj调用，this指向obj。

// // （2）obj.bar()，bar的属性值是一个function，function中调用printA，没有明确哪个对象调用的printA，this默认指向全局window。

// // （3）foo()，将obj.foo赋予给foo，调用foo()，相当于调用window.foo()，this指向window。

// // 3、undefined、language

// // 4、12

// // 解释：dbl方法中，没有使用this，此时的 val 为全局 val

// // 5、22 23 65 30

// // 解释：

// // （1）第三行 obj.fn 立即执行函数，将20传入，自动执行函数 this 指向 window ，此时全局 num 变为60，内部num变为21，返回一个函数。

// // （2）fn(5)，调用函数，此时在全局上下文中调用，this 执行window，**全局 num 变为65 **，内部num变为22，输出22。

// // （3）obj.fn(10)，此时 this 执行 obj ，obj 的 num 变为30，内部num变为23，输出23

// // （4）最后输出全局num和obj.num，即65,30

// // 6、obj、undefined、newObj、undefined、bindObj

// // 解释：

// // （1）调用obj.func()()，箭头函数的this指向func的this，func的this为obj，故输出obj。

// // （2）func()，func的指向为window，window没有_name，故输出undefined

// // （3）bind 一个对象，输出newObj

// // （4）bind没有指明上下文，则bind window，输出undefined

// // （5）多次修改this指向，只认第一次，输出bindObj

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const lydia = new Person("Lydia", "Hallie");
//   const sarah = Person("Sarah", "Smith");

//   console.log(lydia);
//   console.log(sarah);

// var factorial = function fac(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * fac(num - 1);
//   }
// }
// var result = factorial(4);
// // 
// console.log(null instanceof Object);
// console.log(null === undefined);
// console.log(null == undefined);
// console.log(NaN == NaN);

function getSkuKeys(list) {
  if (!list || !list.length) {
    return [];
  }
  let result = [[]];
  let result1 = [];

  for (let item of list) {
    let res = [];
    let str = '';

    for (let compose of result) {
      for (let key of item) {
        res.push(compose.concat(key));
      }
    }
    result = res;
  }
  for(let i = 0 ; i < result.length ; i++ ){
    str = result[i].join('-');
    result1.push(str);
  }
  console.log("result1:",result1);
  return result;
}
const specList = [
  ["red","yellow"],
  ["XL","S"],
  ["a1","a2"],
  ["b1","b2"],
]
console.log(getSkuKeys(specList));
console.log(getSkuKeys(specList).indexOf([ 'red', 'XL', 'a2', 'b1' ]));