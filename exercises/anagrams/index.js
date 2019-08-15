// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return shapeString(stringA) === shapeString(stringB)
}

function shapeString(str) {
  return str
    .replace(/[^a-zA-z]/g, '')
    .split('')
    .map(char => char.toLowerCase())
    .sort((a, b) => b < a)
    .join('')
}

module.exports = anagrams
