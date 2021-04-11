/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let max = -1,
      current = 0
  number.toString().split('').forEach((digit, index, array) => {
    if ((current = parseInt(array.filter((elem, ind) => ind !== index).join(''))) > max)
      max = current
    
    
  })
  return max
}

console.log(deleteDigit(1001))

module.exports = deleteDigit;
