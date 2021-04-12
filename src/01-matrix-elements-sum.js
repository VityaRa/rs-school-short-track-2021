/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  const zeroArray = new Set();
  matrix.forEach((row) => {
    row.forEach((elem, index) => {
      if (zeroArray.has(index) || elem === 0) {
        zeroArray.add(index);
        return;
      }
      res += elem;
    });
  });
  return res;
}

module.exports = getMatrixElementsSum;
