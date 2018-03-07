// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//
// function pyramid(n) {
//   const columnMax = (2 * n) - 1
//   const midpoint = Math.floor(columnMax / 2)
//
//   for (let i = 0; i < n; i++) {
//     let string = ''
//
//     for (let j = 0; j < columnMax; j++) {
//       if (midpoint - i <= j && midpoint + i >= j) {
//         string += '#'
//       } else {
//         string += ' '
//       }
//     }
//     console.log(string)
//   }
// }

function pyramid(n, row = 0, level = '') {
  const columnMax = 2 * n - 1
  const midpoint = Math.floor(columnMax / 2)

  if (n === row) {
    return
  }
  if (level.length === columnMax) {
    console.log(level)
    return pyramid(n, row + 1)
  }
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += '#'
  } else {
    level += ' '
  }
  pyramid(n, row, level)
}

module.exports = pyramid;
