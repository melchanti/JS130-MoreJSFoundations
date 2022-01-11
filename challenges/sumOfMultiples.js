class SumOfMultiples {
  static DEFAULT_LIST = [3, 5];
  constructor() {
    if (arguments.length === 0) {
      this.list = SumOfMultiples.DEFAULT_LIST;
    } else {
      this.list = [...arguments];
    }
  }

  to(number) {
    return SumOfMultiples.findSumOfMultiples(this.list, number);
  }

  static to(num) {
    return SumOfMultiples.findSumOfMultiples(SumOfMultiples.DEFAULT_LIST, num);
  }

  static findSumOfMultiples(list, number) {
    return SumOfMultiples.mergeArrays(list, number).reduce((sum, num) => {
      return sum += num
    }, 0);
  }

  static mergeArrays(list, number) {
    let listOfMultiples = SumOfMultiples.findMultiples(list, number).
    reduce((accum, array) => {
      array.forEach(num => accum.push(num));
      return accum;
    }, []).sort((a, b) => a - b);
    
    return listOfMultiples.reduce((accum, num, index) => {
      if (num !== listOfMultiples[index + 1]) {
        accum.push(num);
      }

      return accum;
    }, []);

  }

  static findMultiples(list, number) {
    return list.map(num => {
      let numMultiples = [];
      let numCum = num;
      while (numCum < number) {
        numMultiples.push(numCum);
        numCum += num;
      }

      return numMultiples;
    });
  }
}

module.exports = SumOfMultiples;