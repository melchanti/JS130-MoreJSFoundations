/*
Problem:
  Create a simple linked list.
  Each element in the linked list contains data and a 'next' field pointing to the next element

  Create an Element object.
  Create a linked list object that is made from the Element object
  Linked list can be reveres and converted to and from an array.

Examples:
  Element object to have teh following methods:
    datum() - gets the data
    isTail() - return true if nothing is connected to the element
    next() - return the item the element is connected to and if there are no elements
              return null
    
  SimpleLinkedList object to include:
    size() returns the size of the list
    isEmpty() - returns true if there are no elements in the list
    push() - adds the passed argument to the list
    peek() - returns the last added element of the list
    head() - returns the last added element of the list
    pop() - returns the last added element of the list and removes it from the list
    fromArray() - static method creates a list from the given argument and returns it, 
              the given argument is an array of data. 
              Needs to create elements with that data in reverse order using pop()
    toArray() - returns an array from a list in reverse order using pop()
    reverse() - reverses the order of the elements in the list

Data Structures:
  Element object:
    store the data in string
  SimpleLinkedList
    store the data in an array

Algoirthm:
  Element:
    Constructor() - takes an argument and stores in the element's data property.
                    Creates a myNext property and initializes it to null
    isTail() - returns this.myNext === null
    next() - returns whatever is stored in the myNext property
    setNext() - takes one argument as an object and set it to the myNext property
    datum() - returns this.data
  
  SimpleLinkedList object:
    constructor() - takes no argument, and creates a list property and initailizes it to
                  an empty array
    size() - returns the length of this.myList
    isEmpty() - returns this.myList === 0
    push() - Creates a new elements, adds it to the array and if there are elements behind it.
            It calls the setNext() method on the previous element with the new elemnt as its property
    peek() - returns the element at myList[mtList.length - 1]
    head() - same as peek
    pop() - return this.myList.pop();
    fromArray() - reverses the given argument, loops through and calls the push method with the values
    toArray() - return this.myList.reverse()
    reverse() - returns this.fromArray(this.myList)
*/

class Element {
  constructor() {
    this.data = arguments[0];
    this.myNext = arguments[1]? arguments[1]: null;
  }

  isTail() {
    return this.myNext === null;
  }

  next() {
    return this.myNext || null;
  }

  setNext(element) {
    this.myNext = element;
  }

  datum() {
    return this.data;
  }
}

class SimpleLinkedList {
  constructor() {
    this.myList = []
  }

  size() {
    return this.myList.length;
  }

  isEmpty() {
    return this.myList.length === 0;
  }

  push(data) {
    let newElement = new Element(data);
    if (this.myList.length !== 0) {
      newElement.setNext(this.myList[this.myList.length - 1]);
    }
    this.myList.push(newElement);
  }

  peek() {
    let lastItem = this.myList[this.myList.length - 1];
    if (lastItem) {
      console.log(lastItem);
      console.log(lastItem.datum());
      return lastItem.datum();
    }

    return null;
  }

  head() {
    let lastItem = this.myList[this.myList.length - 1];
    return lastItem? lastItem: null;
  }

  pop() {
    let returnedElement = this.myList.pop();

    return returnedElement.datum();
  }

  static fromArray(arr) {
    if (!arr) {
      return new SimpleLinkedList();
    }
    //let newArr = arr.splice();
    let tempList = new SimpleLinkedList();
    arr.reverse().forEach(data => {
      tempList.push(data);
    });

    return tempList;
  }

  toArray() {
    let tempList = this.myList.slice();
    return tempList.map(element => element.datum());
  }

  reverse() {
    let tempList = this.myList.slice();
    let newList = SimpleLinkedList.fromArray(tempList.map(element => {
      return element.datum();
    }));

    return newList;
  }
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let list = SimpleLinkedList.fromArray(data);

console.log(list.reverse().toArray());
console.log(data);
console.log(data.reverse());
console.log(data);
//expect(data.reverse()).toEqual(list.reverse().toArray());

module.exports = {
  SimpleLinkedList,
  Element
}