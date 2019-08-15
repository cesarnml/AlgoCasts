// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//* Solution 1
// function palindrome(str) {
//   return (
//     str ===
//     str
//       .split('')
//       .reverse()
//       .join('')
//   )
// }

//* Solution 2
// function palindrome(str) {
//   return str === str.split('').reduce((acc, cur) => cur + acc, '')
// }

//* Solution 3
// function palindrome(str) {
//   return str.split('').every((char, idx) => {
//     return char === str[str.length - 1 - idx]
//   })
// }

//* Solution 4
function palindrome(str) {
  const mid = Math.floor(str.length / 2)
  let result = true
  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[str.length - i - 1]) result = false
  }
  return result
}
module.exports = palindrome
