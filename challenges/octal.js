function convertToDecimal(number) {
  let digit = 0;
  let decimal = 0;
  while (number > 0) {
    let ones = number % 10;
    if (ones >= 8) {
      return 0;
    }

    number = Math.floor(number / 10);
    decimal += ones * (8 ** digit);
    digit += 1;
  }

  return decimal;
}
class octal {
  constructor (string) {
    this.octal = string;
  }

  toDecimal() {
    if (isNaN(Number(this.octal))) {
      return 0;
    }

    return convertToDecimal(Number(this.octal));
  }
}

module.exports = octal;