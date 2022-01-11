class Diamond {
  static DIC = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y',
    'Z',
  ]

  static makeDiamond(char) {
    return Diamond.drawFirstHalf(Diamond.DIC.indexOf(char)) +
    Diamond.drawSecondHalf(Diamond.DIC.indexOf(char));
  }

  static drawFirstHalf(length) {
    let string = '';
    for (let index = 0; index <= length; index += 1) {
      let letter = Diamond.DIC[index];
      let sideSpaces = length - index;
      let centerSpaces = (index * 2) - 1;
      if (index === 0) {
        string += ' '.repeat(sideSpaces) + letter + ' '.repeat(sideSpaces);
      } else if (index <= length) {
        string += '\n' + ' '.repeat(sideSpaces) + letter +
          ' '.repeat(centerSpaces) + letter + ' '.repeat(sideSpaces);
      }
    }

    return string;
  }

  static drawSecondHalf(length) {
    let string = '';
    for (let index = length - 1; index >= 0; index -= 1) {
      let letter = Diamond.DIC[index];
      let sideSpaces = length - index;
      let centerSpaces = (index * 2) - 1;
      if (index === 0) {
        string += '\n' + ' '.repeat(sideSpaces) + letter + ' '.repeat(sideSpaces);
      } else {
        string += '\n' + ' '.repeat(sideSpaces) + letter +
          ' '.repeat(centerSpaces) + letter + ' '.repeat(sideSpaces);
      }
    }

    return string += '\n';
  }
}

module.exports = Diamond;