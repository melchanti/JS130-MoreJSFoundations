/*
Problem:
  Given a word and a list find all the words in the list that are anagram
  of the given word.
  An anagram has the same letters and it's case sensitive.
  Need a class with two methods constructor (takes one word,
  doesn't return anything)
  match, returns an array with the matches from the list.
Examples:
  Given
Data Structures:
  The list will be received in an array and the result
  should be returned as an array
Algorithm:
  Constructor:
    set the given word to a property of the object
  Match:
    put the initial string in an array of characters
    Loop through the given list
    For each word:
      check if the length is equal
      Loop through the current word in the list
        for each letter, remove it from the initial array
        if the current letter is not in the array, don't add the word
        if all the letters are in the array, add the word to the list
*/

let anagramClosure = (function() {

  function equalLength(word1, word2) {
    return word1.length === word2.length;
  }

  function sameWord(word1, word2) {
    return word1 === word2;
  }

  function isAnagram(word1, word2) {
    let initialArray = word1.toLowerCase().split('');
    return [].every.call(word2, char => {
      let index = initialArray.indexOf(char.toLowerCase());
      if (index < 0) {
        return false;
      }
      initialArray.splice(index,1);
      return true;
    });
  }
  return class {
    constructor(word) {
      this.word = word;
    }

    match(list) {
      let myWord = this.word;
      return list.filter(currentWord => {
        return equalLength(myWord, currentWord)
        && !sameWord(myWord.toLowerCase(), currentWord.toLowerCase())
        && isAnagram(myWord, currentWord);

      });
    }
  };
})();

module.exports = anagramClosure;