/*function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}

function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}*/
/*
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let bar = obj.bar;
let baz = obj.baz;
let qux = obj.qux;
*/

/*function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];|*/
/*
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);*/
/*
function product(num1, num2, num3, num4) {
  let numbers = [num1, num2, num3, num4];

  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);*/
/*
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  return {
    type: animalType,
    age,
    colors,
  };
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]*/

function objReturn(...args) {
  let [first, , , , last] = args;
  let middle = args.splice(1,3);
  return {
    first,
    last,
    middle: middle.sort(),
  }
}

let array = [1, 2, 3, 4, 5];
let {first, last, middle} = objReturn(...array);
console.log(first);
console.log(last);
console.log(middle);
