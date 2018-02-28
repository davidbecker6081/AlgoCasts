// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// word.replace(/[^\w]/g, '').toLowerCase()
// Use a Map for each
// map.get(key)
// map.has(key)
// map.entries
// map.size
// map.values
// map.keys

function anagrams(stringA, stringB) {
  const charMapA = buildCharMap(stringA)
  const charMapB = buildCharMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false
  }
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }
  return true
}

function buildCharMap(str) {
  return [...str].reduce((charMap, letter) => {
    letter.replace(/[^\w]/g, '').toLowerCase()
    charMap[letter] = charMap[letter] + 1 || 1
    return charMap
  }, {})
}

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB)
// }
//
// function cleanString(str) {
//   const onlyCharString = str.replace(/[^\w]/g, '').toLowerCase()
//   return [...onlyCharString].sort().join('')
// }

// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
//
//   const mapA = [...stringA].reduce((map, letter) => {
//     if (!map.has(letter)) {
//       map.set(letter, 1)
//     } else {
//       let count = map.get(letter) + 1
//       map.set(letter, count)
//     }
//     return map
//   }, new Map())
//
//   const mapB = [...stringB].reduce((map, letter) => {
//     if (!map.has(letter)) {
//       map.set(letter, 1)
//     } else {
//       let count = map.get(letter) + 1
//       map.set(letter, count)
//     }
//     return map
//   }, new Map())
//
//
//   if (mapA.size === mapB.size) {
//     for (let a_key of mapA.keys()) {
//       if (!mapB.has(a_key)) {
//         return false
//       } else {
//         if (mapB.get(a_key) !== mapA.get(a_key)) {
//           return false
//         }
//       }
//     }
//     return true
//   } else {
//     return false
//   }
// }

module.exports = anagrams;
