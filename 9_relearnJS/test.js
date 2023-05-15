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
//     proto = Object.getPrototypeOf(left);
//   }
// }

// function myInstanceOf(letf, right) {
//   let proto = Object.getPrototypeOf(letf);
//   let prototype = right.prototype;

//   while (true) {
//     if (!proto) {
//       return false;
//     }
//     if (proto == prototype) {
//       return true;
//     }
//     proto = Object.getPrototypeOf(proto);
//   }
// }
// console.log([] instanceof Array);
// console.log(myInstanceOf([], Array));

// function student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// function createStu(consturctor, ...args) {
//   let obj = Object.create(null);
//   Object.setPrototypeOf(obj, consturctor.prototype);
//   let result = consturctor.apply(obj, args);
//   return result instanceof Object ? result : obj;
// }

let str = '12321321321312sdgfa234xz';

function getCodeCount(str, code) {
  let num = Array.prototype.filter.call(str, (ele) => {
    return ele == code;
  });
  return num.length;
}
console.log(getCodeCount(str, 2));

function getAllCodeCount(str) {
  let arr = Array.from(str);
  let arr3 = [];
  let set = new Set();
  arr.forEach((ele) => {
    set.add(ele);
  });
  set.forEach((ele) => {
    arr3.push({ code: ele, count: 0 });
  });
  arr.forEach((ele) => {
    arr3.forEach((elee) => {
      if (elee.code == ele) {
        elee.count++;
      }
    });
  });
  return arr3;
}
console.log(getAllCodeCount(str));
