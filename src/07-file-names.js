/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = [];
  const occ = {};
  for (let i = 0; i < names.length; i++) {
    if (!(newNames.includes(names[i]))) {
      newNames.push(names[i]);
      occ[names[i]] = 0;
    } else {
      occ[names[i]] += 1;
      newNames.push(`${names[i]}(${occ[names[i]]})`);
      occ[`${names[i]}(${occ[names[i]]})`] = 0;
    }
  }
  return newNames;
}

module.exports = renameFiles;
