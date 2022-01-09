/*setTimeout(function() {
  console.log('!');
}, 3000);

setTimeout(function() {
  console.log('World');
}, 1000);

console.log('Hello');*/
/*Question 1
function delatLog() {
  for(let index = 1; index <= 10; index+=1) {
    setTimeout(function() {
      console.log(index);
    }, (index * 1000));
  }
}

delatLog();
*/
/*Question 2
If we were to change let to var inside the loop, the number 11 would log at each iteration.
The callback for `setTimeout` doesn't get executed until the full loop is run. After the 
last iteration of the for loop, the value of `index` would be 11 because `var` deals with 
function scope not block scope. Hence, each iteration of the `for` loop uses the same function-scoped
variable rather than a block-scoped variable like when using `let`. Therefore, when `setTimeout`
goes to run the callback. The value of `index` would be 11 for all the iterations.

function delatLog() {
  for(var index = 1; index <= 10; index+=1) {
    setTimeout(function() {
      console.log(index);
    }, (index * 1000));
  }
}

delatLog();*/

/*In what sequence do the following functions run
g() => f() => d() => z() => n() => s() => q()

setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();
*/

function afterNSeconds(callback, delay) {
  setTimeout(() => callback(delay), delay * 1000);
}

let func = function(delay) {
  console.log(`I ran after ${delay} seconds`);
};

afterNSeconds(func, 3);