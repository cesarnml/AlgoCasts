// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = str.split('').reduce((hash, char) => {
    hash[char] = hash[char]++ || 1
    return hash
  }, {})
  let maxCount = 0
  let keyMax = ''
  for (let key in hash) {
    if (hash[key] > maxCount) {
      maxCount = hash[key]
      keyMax = key
    }
  }
  return keyMax
}

module.exports = maxChar
