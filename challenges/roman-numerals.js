/*
Problem:
Convert current numbers to roman numerals up to 3000.
We need an object that takes one number. If it's not a number or the number
is larger than 3000 throw an error.
The object has a method called `toRoman()` that return a string representation
of the roman equivalent of that number.
rules:
I - 1
III - 3
IV - 4
V - 5
VIII - 8
IX - 9
X - 10
XXX - 30
XL - 40
L - 50
LXXX - 80
XC - 90
C - 100
CCC - 300
CD - 400
D - 500
DCCC - 800
CM - 900
M - 1000
MMM - 3000
Examples:
Given
Data Structures:
Take a number, return a string.
Need representations of the different numbers in an array.

Algorithm:
constructor
  assign the number to a value to be used for future reference.
toRoman
  Create four arrays for each digit, i.e., ones, tens, hundreds, thousands each
  with the roman equivalents.
  Get the integer of dividing the number by a thousand and find its equivalent in the
  thousands array, append it to the roman string.
  Keep going until the ones.
*/

let romanClosure = (function() {
  const ONES = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const TENS = ['', 'X', 'XX', 'XX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const HUNDREDS = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const THOUSANDS = ['', 'M', 'MM', 'MMM'];
  const ROMANS = [THOUSANDS, HUNDREDS, TENS, ONES];

  function validateNumber(number) {
    if (isNaN(Number(number))) {
      throw new Error ("given input isn't a number");
    } else if (Number(number) > 3000) {
      throw new Error ("Given number is larger than 3000");
    }
  }

  function convertRomans(number) {
    let thousandDigit = parseInt(number / 1000);
    let hundredDigit = parseInt((number % 1000) / 100);
    let tenDigit = parseInt((number % 100) / 10);
    let oneDigit = number % 10;
    let numArray = [thousandDigit, hundredDigit, tenDigit, oneDigit];

    return numArray.map((num, index) => {
      return ROMANS[index][num];
    }).join('');
  }

  return class {
    constructor(number) {
      validateNumber(number);
      this.num = number;
    }

    toRoman() {
      return convertRomans(this.num);
    }
  }
})();

module.exports = romanClosure;