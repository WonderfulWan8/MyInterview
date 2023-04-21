// function myInstanceOf(left, right) {
//   let proto = Object.getPrototypeOf(left);
//   let prototype = right.prototype;

//   while (true) {
//     if (!proto) {
//       return false;
//     }
//     if (proto === prototype) {
//       return true;
//     }
//     proto = Object.getPrototypeOf(proto);
//   }
// }

// console.log(myInstanceOf('123', {}));
// console.log(myInstanceOf([], Array));

// var a = 'Dav';
// // var a = String('da');
// // var a = new String('dad');

// console.log(typeof a);
// console.log(typeof String(a));
// console.log(typeof new String(a));

// function myInstanceOf(left, right) {
//   let proto = Object.getPrototypeOf(left);
//   let prototype = right.prototype;
//   while (true) {
//     if (!proto) {
//       return false;
//     }
//     if (proto === prototype) {
//       return true;
//     }
//     proto = Object.getPrototypeOf(proto);
//   }
// }

// console.log(myInstanceOf([], Array)); //true
// console.log([] instanceof Array); //true
// console.log(myInstanceOf(123, Array)); //false
// console.log(123 instanceof Array); //false

function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (!proto) {
      return false;
    }
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(left);
  }
}
