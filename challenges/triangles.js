/*
Problem: Identify the type of triangle
  Input: 3 numbers
  Output: 1 string
Examples:
  Input: triangle(3, 4, 5)
  Output: scalene

  Input: triangle(3, 3, 5)
  output: isosceles

  Input: triangle(3, 3, 3)
  output: equilateral

  Input: triangle (3, 3, 7)
  output: invalid

  Input: triangle (s, 3, 4)
  output: invalid

Data structures:
  put them in an array and solve

Algorithm:

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

function invalidEntry(sides) {
  return sides.some(side =>  isNaN(Number(side)));
}

function invalidTriangle(sides) {
  return (sides[0] + sides[1]) < sides[2];
}

function isoscelesTriangle(sides) {
  return sides.some((side, index) => side === sides[index + 1]);
}

function equilateralTriangle(sides) {
  return (sides[0] === sides[1]) && (sides[0] === sides[2]);
}

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  if (invalidEntry(sides)) {
    return 'invalid triangle';
  }

  sides.sort((a, b) => a - b);

  if (invalidTriangle(sides)) {
    return 'invalid triangle';
  }

  if (equilateralTriangle(sides)) {
    return 'equilateral triangle';
  }

  if (isoscelesTriangle(sides)) {
    return 'isosceles triangle';
  }

  return 'scalene triangle';

}

module.exports = triangle;