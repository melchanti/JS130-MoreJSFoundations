class Series {
  constructor(string) {
    this.myString = string;
  }

  slices(length) {
    if (length > this.myString.length) {
      throw new Error('the length provided is longer than the string');
    } else {
      return Series.arraySlices(this.myString, length);
    }
  }

  static arraySlices(string, length) {
    let myLength = string.length;
    let slices = [];
    let stringArray = string.split('').map(num => Number(num));
    for (let index = 0; myLength - index >= length; index += 1) {
      slices.push(stringArray.slice(index, index + length));
    }
    return slices;
  }
}

let mySeries = new Series('01234');
console.log(mySeries.slices(1));

module.exports = Series;