function reduce(array, callback, accum, thisArg) {
  let workingArray = array.slice();
  let reduced;

  if (accum !== undefined) {
    reduced = accum;
  } else {
    reduced = workingArray.shift();
  }


  for (let index = 0; index < workingArray.length; index += 1) {
    reduced = callback.call(thisArg, reduced, workingArray[index], index,
      array);
  }

  return reduced;
}


let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]