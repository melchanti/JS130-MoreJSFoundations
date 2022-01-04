function filter(array, callback, thisArg) {
  let newArr = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback.call(thisArg, array[index], index, array)) {
      newArr.push(array[index]);
    }
  }

  return newArr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]