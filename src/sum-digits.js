const { NotImplementedError } = require('../extensions/index.js');

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
 function getSumOfDigits(n) {
  if ((n>0)&&(n<10)) {
    return n;
  }
  let nArray = new String(n).split('');
  let sum = 0;
  for (let i=0; i<nArray.length; i++) {
    nArray[i] = new Number(nArray[i])
    sum += nArray[i];
  }
  return getSumOfDigits(sum);
  // return nStr;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
