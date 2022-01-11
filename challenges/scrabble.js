let scrabbleClosure = (function() {
  const LETTER_SCORE = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
    d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4,
    y: 4, k: 5, j: 8, x: 8, q: 10, z: 10,
  };

  function calculateScore(word) {
    return [].reduce.call(word, (accum, letter) => {
      return accum += LETTER_SCORE[letter];
    }, 0)
  }

  return class scrabble {
    constructor(word) {
      if (!word) {
        this.word = '';
      } else {
        this.word = word.toLowerCase();
      }
    }

    score() {
      return calculateScore(this.word.replace(/[^a-z]/g,''));
    }

    static score(string) {
      return calculateScore(string.toLowerCase().replace(/[^a-z]/g,''));
    }
  }
})();

module.exports = scrabbleClosure;