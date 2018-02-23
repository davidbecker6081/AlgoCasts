// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let reversed = ''
//   const stringNum = n.toString()
//   if (n < 0) {
//     reversed += '-'
//   }
//   for (let i = stringNum.length - 1; i >= 0; i--) {
//     reversed += stringNum[i]
//   }
//
//   return parseInt(reversed)
// }

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')

  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
