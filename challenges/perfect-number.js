function findDivisors(number) {
  let num = 1;
  let divisors = [];
  while (num < number) {
    if (number / num === parseInt(number / num)) {
      divisors.push(num);
    }

    num += 1;
  }

  return divisors;
}

function identify(number, sum) {
  if (number === sum) {
    return 'perfect';
  } else if (number < sum) {
    return 'abundant';
  } else {
    return 'deficient';
  }
}

let perfectNumber = class {
  static classify(number) {
    if (number < 0) {
      throw new Error ('invalid number');
    } else {
      let divisors = findDivisors(number);
      let sum = divisors.reduce((accum, num) => {
        return accum += num;
      }, 0);

      return identify(number, sum);
    }
  }
}

module.exports = perfectNumber;