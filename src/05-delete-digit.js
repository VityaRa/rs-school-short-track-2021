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
  let max = -1;
  number.toString().split('').forEach((digit, index, array) => {
    if (parseInt(array.filter((elem, ind) => ind !== index).join(''), 10) > max) {
      max = parseInt(array.filter((elem, ind) => ind !== index).join(''), 10);
    }
  });
  return max;
}

module.exports = deleteDigit;
