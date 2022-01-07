"use strict";
/*function makeCounterLogger(num) {
  return function(num2) {
    if (num2 > num) {
      for (let count = num; count <= num2; count += 1) {
        console.log(count);
      }
    } else {
      for (let count = num; count >= num2; count -= 1) {
        console.log(count);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);*/
/*
function makeList() {
  let list = [];
  return function(item) {
    if (list.includes(item)) {
      list.splice(item, 1);
      console.log(`${item} removed`);
    } else if (!item) {
      if (list.length === 0) {
        console.log ('The list is empty.');
      } else {
        console.log (list);
      }
    } else {
      list.push(item);
      console.log (`${item} added!`)
    }
  };
}

let list = makeList();
list();

list('make breakfast');
list('read book');
list();
list('make breakfast');
list();
*/

function makeList() {
  let list = [];

  return {
    add: function(item) {
      list.push(item);
      console.log(`${item} added!`);
    },
    
    remove: function(item) {
      list.splice(item, 1);
      console.log(`${item} removed!`);
    },

    list: function() {
      if (list.length !== 0) {
        list.forEach(item => console.log(item));
      } else {
        console.log ('The list is empty.');
      }
    }
  };
}

let list = makeList();
list.list();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();