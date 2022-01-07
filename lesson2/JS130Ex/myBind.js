function myBind(func, thisArg) {
  let initialArgs = [].slice.call(arguments, 2);
  return function(){
    let remainingArgs = [].slice.call(arguments);
    let fullArgs = initialArgs.concat(remainingArgs);
    return func.call(thisArg, ...fullArgs);
  };
}
function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
