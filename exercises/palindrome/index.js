// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

// function palindrome(str) {
//   const reversed = [...str]
//     .reverse()
//     .join('')
//   return str === reversed
// }

// function palindrome(str) {
//   if (str.length < 2) {
//     return true
//   }
//
//   let letterX = str.slice(0, 1)
//   let letterY = str.slice(str.length - 1)
//   let newString = str.slice(1, str.length - 1)
//
//   return letterX === letterY ? palindrome(newString) : false
// }

module.exports = palindrome;
