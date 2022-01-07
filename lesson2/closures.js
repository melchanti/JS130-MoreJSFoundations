/*function makeMultipleLister(num) {
  return function() {
    let counter = 2;
    let temp = num;
    while(temp < 100) {
      console.log(temp);
      temp = num * counter;
      counter += 1;
    }
  };
}

let lister = makeMultipleLister(17);
lister();*/
/*
let num = 0;

function functionCreator(operator) {
  if (operator === '+') {
    return function(arg) {
      num += arg;
      console.log(num);
    };
  } else {
    return function(arg) {
      num -= arg;
      console.log(num);
    }
  }
}

let add = functionCreator('+');
let subtract = functionCreator('-');

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10
*/

/*
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); //function where prod = 2
let result = bar(3); // number where prod = 6, result = 6
result += bar(4); // number where prod = 24, result = 30
result += bar(5); // number whre prod = 120, result = 150
console.log(result);
*/
/*
function later(func, msg) {
  return function() {
    func(msg);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!*/
/*
function later2(func, msg) {
  return function(msg2) {
    func(msg, msg2);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!
*/

function bind(thisArg, func) {
  return function() {
    func.call(thisArg);
  }
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }