// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if (str.length < 2) {
    return str
  }
  let maxCountObject = { letter: '', counter: 0 }
  const charCounts = [...str].reduce((countObj, char) => {
    if (!countObj[char]) {
      countObj[char] = 0
    }
    countObj[char] += 1

    return countObj
  }, {})

  maxCountObject = Object.keys(charCounts).reduce((maxCount, char) => {
    if (charCounts[char] > maxCount.counter) {
      maxCount.counter = charCounts[char]
      maxCount.letter = char
    }
    return maxCount
  }, maxCountObject)

  return maxCountObject.letter
}

module.exports = maxChar;
