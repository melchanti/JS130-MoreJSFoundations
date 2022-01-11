"use strict";

/*
Problem: Identify the type of triangle
  Input: 3 numbers
  Output: 1 object
  
Examples:
  Input: new Triangle(2, 2, 2)
  Output: scalene

  Input: new Triangle(3, 3, 5)
  output: isosceles

  Input: triangle(3, 3, 3)
  output: equilateral

  Input: triangle (3, 3, 7)
  output: invalid

  Input: triangle (s, 3, 4)
  output: invalid

Data structures:
  put the sides in an array and solve
  return an object with one method

Algorithm:

  SET Triangle = {
    constructor()
  }
  SET sides = [side1, side2, side3]
  loop through the sides to find out if one of them is not a number
    return invalid

  sort the sides in order

  find out if the sum of the two shorter sides is shorter than the third
    return invalid

  loop through the sides to find out if all 3 are equal
    return equilateral

  loop through the sides to find out if two of them are equal
    return isosceles
*/

class Triangle {
  constructor(side1, side2, side3) {

    this.sides = [side1, side2, side3];

    if (this.invalidEntry()) {
      throw new Error(TypeError);
    }

    this.sides.sort((a, b) => a - b);

    if (this.invalidTriangle()) {
      throw new Error(TypeError);
    }
  }

  kind() {
    if (this.equilateralTriangle()) {
      return 'equilateral';
    }

    if (this.isoscelesTriangle()) {
      return 'isosceles';
    }

    return 'scalene';
  }

  invalidEntry() {
    return this.sides.some(side =>  isNaN(Number(side)) || side <= 0);
  }

  invalidTriangle() {
    return (this.sides[0] + this.sides[1]) <= this.sides[2];

  }

  equilateralTriangle() {
    return (this.sides[0] === this.sides[1]) &&
      (this.sides[0] === this.sides[2]);
  }

  isoscelesTriangle() {
    return this.sides.some((side, index) => side === this.sides[index + 1]);
  }

}

module.exports = Triangle;