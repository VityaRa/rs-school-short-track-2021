/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let count = 0;
  const firstStr = str1;
  let secondStr = str2;
  let index = 0;
  secondStr = secondStr.split('');
  firstStr.split('').forEach((element) => {
    if (secondStr.indexOf(element) !== -1) {
      index = secondStr.indexOf(element);
      count++;
      secondStr[index] = '';
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
