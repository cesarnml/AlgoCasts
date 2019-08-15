// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//* Solution 1
// function reverseInt(n) {
//   if (n >= 0) {
//     return Number(
//       String(n)
//         .split('')
//         .reverse()
//         .join('')
//     )
//   } else {
//     return (
//       -1 *
//       Number(
//         String(n)
//           .split('')
//           .slice(1)
//           .reverse()
//           .join('')
//       )
//     )
//   }
// }

//* Solution 2
function reverseInt(n) {
  return (
    Math.sign(n) *
    parseInt(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  )
}

module.exports = reverseInt
