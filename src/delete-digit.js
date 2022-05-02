const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  let nStr = n.toString().split('');
  // console.log(typeof nStr);
  let allNewNumber = [];
  for (let i = 0; i< nStr.length; i++) {
    // let nStrNumber = nStr.split('');
    // console.log(nStrNumber);
    // nStr = n.toString().split('');
    nStr.splice(i,1);
    let diffStr = nStr;
    let newStr = diffStr.toString();
    let xxx = newStr.replace(/[, ]+/g, "");
    let nNumber = new Number(xxx);
    allNewNumber.push(nNumber);
    nStr = n.toString().split('');
  }
  return Math.max.apply(null,allNewNumber);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
