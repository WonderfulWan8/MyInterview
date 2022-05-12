// 1、
function Pig(){
    this.age=99;
    return 'abc';
 }
 var pig=new Pig();
 console.log(pig) 
 
 // 2、
 var a=1;
 function printA(){
   console.log(this.a);
 }
 var obj={
   a:2,
   foo:printA,
   bar:function(){
     printA();
   }
 }
 
 obj.foo(); 
 obj.bar(); 
 var foo=obj.foo;
 foo(); 
 
 // 3、
 var fullName = 'language'
 var obj = {
   fullName: 'javascript',
   prop: {
     getFullName: function () {
       return this.fullName
     }
   }
 }
 console.log(obj.prop.getFullName())
 var test = obj.prop.getFullName
 console.log(test())
 
 // 4、
 var val = 1
 var json = {
   val: 10,
   dbl: function () {
     val *= 2
   },
 }
 json.dbl()
 console.log(json.val + val)
 
 // 5、
 var num = 10 
 var obj = { num: 20 }
 obj.fn = (function (num) {
   this.num = num * 3
   num++
   return function (n) {
     this.num += n 
     num++
     console.log(num) 
   }
 })(obj.num)
 var fn = obj.fn
 fn(5)
 obj.fn(10)
 console.log(num, obj.num)
 
 // 6、
 var obj = {
   _name: 'obj',
   func() {
     const arrowFunc = () => {
       console.log(this._name)
     }
     return arrowFunc
   },
 }
 obj.func()()
 var func = obj.func
 func()()
 obj.func.bind({ _name: 'newObj' })()()
 obj.func.bind()()()
 obj.func.bind({ _name: 'bindObj' }).apply({ _name: 'applyObj' })()
 