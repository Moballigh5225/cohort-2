/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reversedString = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedString;
}

module.exports = isPalindrome;
