function newStack() {
  let stack = [];
  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      return stack.pop();
    },
    
    printStack() {
      stack.forEach(value => {
        console.log(value);
      });
    },
  };
}

let stack = new newStack();
stack.push(5);
stack.push(7);
stack.push(8);
stack.push(66);
stack.pop();
stack.printStack();

