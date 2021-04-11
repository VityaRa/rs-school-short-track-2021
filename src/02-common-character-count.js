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
  let count = 0,
      index = 0
  str2 = str2.split('')
  str1.split('').forEach(element => {
    if ((index = str2.indexOf(element)) !== -1){
      count++
      str2[index] = ''
    }
  });
  return count
}

module.exports = getCommonCharacterCount;
