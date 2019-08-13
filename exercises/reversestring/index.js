// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//* Solution 1
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('')
// }

//* Solution 2
// function reverse(str) {
//   const mid = Math.floor(str.length / 2)
//   const revStrArr = Array(str.length)
//   for (let i = 0; i <= mid; i++) {
//     revStrArr[i] = str.charAt(str.length - 1 - i)
//     revStrArr[str.length - 1 - i] = str.charAt(i)
//   }
//   return revStrArr.join('')
// }

//* Solution 3

// function reverse(str) {
//   let reversed = ''
//   for (let char of str) {
//     reversed = char + reversed
//   }
//   return reversed
// }

//* Solution 4

function reverse(str) {
  return str.split('').reduce((acc, char) => char + acc, '')
}
module.exports = reverse
