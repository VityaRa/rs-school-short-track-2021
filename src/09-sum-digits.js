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

function findDigitSum(num) {
  let cur = num;
  let sum = 0;
  while (cur > 0) {
    sum += cur % 10;
    cur = parseInt(cur / 10, 10);
  }
  return sum;
}

function getSumOfDigits(number) {
  let cur = number;
  while (cur >= 10) {
    cur = findDigitSum(cur);
  }
  return cur;
}

module.exports = getSumOfDigits;
