function f1() {
  var n = 999;
  nAdd = function () {
    console.log('nAdd', (n += 1));
  };
  function f2() {
    console.log('f2', n);
  }
  return f2;
}

var result = f1();
result(); //f2 999
nAdd(); //nAdd 1000
result(); //f2 1000

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
} // 6 6 6 6 6 6
