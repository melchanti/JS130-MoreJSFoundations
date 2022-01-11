/*
Problem: Write a program that calculates the hamming distance between two strands
Hamming distance is calculated by finding the number of different letters in two different
strands.
If one strand is shorter than the other, the hamming distance is calculated off the shorter
strand.

Examples:
Given, based on the examples, we need to return a new object for DNA.
The object has a method called `hammingDistance` that takes another DNA stran as a string.
The method returns the hamming distance.

Data Structures:
string

Algorithm:
constructor:
  assign the given DNA to this strand

hammingDistance:
  check if both strings are equal, if so return 0
  assign the value of shorter to the shorter string and the value of longer to the longer string
  loop through the shorter string and find the differences
  return the number of differences
*/

let dnaClosure = (function() {
  function equalDna(dna, distance) {
    return dna === distance;
  }

  function compare(short, long) {

    return [].reduce.call(short, (accum, char, index) => {
      if (char !== long[index]) {
        return accum += 1;
      }

      return accum;
    }, 0);
  }

  return class {
    constructor(dna) {
      this.strand = dna;
    }

    hammingDistance(distance) {
      if (equalDna(this.strand, distance)) {
        return 0;
      }
      let shorter;
      let longer;
      if (this.strand.length <= distance.length) {
        shorter = this.strand;
        longer = distance;
      } else {
        shorter = distance;
        longer = this.strand;
      }

      return compare(shorter, longer);
    }
  };
})();

module.exports = dnaClosure;