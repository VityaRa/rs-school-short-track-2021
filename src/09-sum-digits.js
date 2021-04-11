/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  while (number >= 10) {
    number = findDigitSum(number)
  }
  return number
}

function findDigitSum(num) {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = parseInt(num / 10)
  }
  return sum
}



module.exports = getSumOfDigits;
