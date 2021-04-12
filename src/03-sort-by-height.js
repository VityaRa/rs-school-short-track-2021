/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const param = arr;
  const sortedArray = param.filter((elem) => elem !== -1).sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] !== -1) {
      param[i] = sortedArray[index];
      index++;
    }
  }
  return param;
}

module.exports = sortByHeight;
