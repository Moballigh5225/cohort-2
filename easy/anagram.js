/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let cleanStr1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let cleanStr2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

  let stringOne = cleanStr1.split("").sort();
  let stringTwo = cleanStr2.split("").sort();
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] != stringTwo[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("", ""));

module.exports = isAnagram;
// npx jest ./tests/findLargestElement.test.js
