// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}

// function reverse(str) {
//   let reversed = ''
//   for (let char of str) {
//     reversed = char + reversed
//   }
//   return reversed
// }

// function reverse(str) {
//   return [...str].reduce((rev, char) => char + rev, '')
// }

module.exports = reverse;
