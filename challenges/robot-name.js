let robotName = (function() {
  const NAMES = [];
  const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  function randomName() {
    let name = '';
    for (let index = 0; index < 5; index += 1) {
      if (index < 2) {
        let randomNumber = Math.floor(Math.random() * (ALPHABETS.length + 1));
        name += ALPHABETS[randomNumber];
      } else {
        name += Math.floor(Math.random() * 10);
      }
    }

    if (NAMES.includes(name)) {
      return randomName();
    }

    NAMES.push(name);

    return name;
  }
  return class Robot {
    constructor() {
    }

    name() {
      if (this.myName) {
        return this.myName;
      }
      this.myName = randomName();
      return this.myName;
    }

    reset() {
      NAMES.splice(NAMES.indexOf(this.myName), 1);
      this.myName = undefined;
    }
  }
})();

module.exports = robotName;