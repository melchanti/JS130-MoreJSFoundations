/*
Problem: Create a custom set of numbers
Examples:
 From the examples we need these methods:
  constructor: creates a set with the given array argument
  contains: takes one argument, returns true if a set contains an element
  subset: takes one argument of a set. returns true if all the elements of the caller are
          in the argument set
  disjoint: takes one argument of a set. Returns true if the caller shares no elements with
            the argument
  isSame: takes one argument of a set. Sets with the same elements are equal
  add: takes an arugment of a number. adds the argument to the caller set
  intersection: takes an argument of a set. returns a set with all shared elements
  difference: takes an argument of a set. Returns a set with the elements that are in the
              caller but aren't in the argument set
  Union: takes an argument of a set, returns a set with the unique elements of both sets
Data Structures:
  A set stores its elements in an array
Algorithm:
  constructor: initializes the array with the given argument if one is provided, otherwise
              creates an empty array
  contains: returns this.mySet.includes(arg);
  subset: this.mySet.every(element => argument.getSet().includes(element));
          if (this.mySet.length === 0) return true;
          if (argument.getSet().length === 0) return false
  disjoint: if (this.mySet.length === 0 || argument.getSet().length === 0) return true;
            return this.mySet.every(element => !argument.getSet().includes(element));
  isSame: if (this.mySet.length === 0 && argument.getSet().length === 0) return true
          if (this.mySet.length === 0 || argument.getSet().length === 0) return false;
          sort both sets. this.mySet.every((element, index) => argument.getSet()[index] === element);
  add: if (this.mySet.includes(arg)) return;
        this.mySet.push(arg)
  intersection: if (this.mySet.length === 0 || argument.getSet().length === 0) return new CustomSet();
                this.mySet.filter(element => argument.getSet().includes(element));
  difference: if (this.mySet.length === 0 || argument.getSet().length === 0) return this;
              this.mySet.filter(element => !argument.getSet().includes(element));
  union: let newArr = this.myList.slice();
        if (argument.getList().length !== 0) {
          argument.getList().forEach(element => if (!newArr.includes(element)) newArr.push(element));
        }
        return new CustomSet(newArr);

*/

class CustomSet {
  constructor(arr = []) {
    this.mySet = arr;
  }

  getSet() {
    return this.mySet;
  }
  contains(num) {
    return this.mySet.includes(num);
  }

  isSubset(argSet) {
    if (this.mySet.length === 0) return true;
    if (argSet.getSet().length === 0) return false
    return this.mySet.every(element => {
      return argSet.getSet().includes(element);
    });
  }

  isDisjoint(argSet) {
    if (this.mySet.length === 0 || argSet.getSet().length === 0) return true;
    return this.mySet.every(element => !argSet.getSet().includes(element));
  }

  isSame(argSet) {
    if (this.mySet.length === 0 && argSet.getSet().length === 0) return true;
    if (this.mySet.length === 0 || argSet.getSet().length === 0) return false;
    let myListSorted = this.mySet.slice().sort((a,b) => a - b);
    let argListSorted = argSet.getSet().slice().sort((a,b) => a - b);
    if (myListSorted.every(element => element === argListSorted.shift())) {
      return argListSorted.length === 0;
    }

    return false;
  }

  add(elem) {
    if (!this.mySet.includes(elem)) this.mySet.push(elem);

    return this;
  }

  intersection(argSet) {
    if (this.mySet.length === 0 || argSet.getSet().length === 0) return new CustomSet();
    let newList = this.mySet.filter(element => argSet.getSet().includes(element));
    return new CustomSet(newList);
  }

  difference(argSet) {
    if (this.mySet.length === 0 || argSet.getSet().length === 0) {
      return new CustomSet(this.mySet);
    }

    let newList = this.mySet.filter(element => !argSet.getSet().includes(element));

    return new CustomSet(newList);
  }

  union(argSet) {
    let newList = this.mySet.slice();

    if (argSet.getSet().length !== 0) {
      argSet.getSet().forEach(element => {
        if (!newList.includes(element)) newList.push(element);
      });
    }

    return new CustomSet(newList);
  }

  isEmpty() {
    return this.mySet.length === 0;
  }
}

module.exports = CustomSet;
