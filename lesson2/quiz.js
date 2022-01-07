/*console.log(foo());

function foo() {
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log('bar again and again');
  }
}


function foo(initialValue) {
  let total = initialValue;
  return function (adjustmentValue) {
    total += adjustmentValue;
    return total;
  };
}

let bar = foo(10); // total = 10
let result = bar(-2); //result = 8, total = 8
result += bar(5); // total = 13, result = 21
result += bar(3); // total = 16, result = 37
result += bar(-4); // total = 12, result = 49
console.log(result);*/