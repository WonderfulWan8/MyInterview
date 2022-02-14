let a = 0;
function fn1(){
    let a1 = 100
    function fn2(){
        let a2 = 200
        function fn3 (){
            let a3 = 300
            return a + a1 + a2 + a3
        }
        fn3()
    }
    fn2()
}
let b = fn1();
console.log(b);