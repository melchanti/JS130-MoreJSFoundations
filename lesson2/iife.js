/*var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];



sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);  // ?*/
/*
(function(arg) {
  for (let count = arg; count >= 0; count -= 1) {
    console.log(count);
  }
})(7);*/
/*
let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);*/

(function rec(arg) {
  if (arg ===0) {
    console.log(arg);
    return;
  }

  console.log(arg);

  return rec(arg - 1);
})(7);