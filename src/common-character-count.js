const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
  let newS1 = s1.toString().split('');
  let newS2 = s2.toString().split('');
  let newS = [...new Set(newS1, newS2)];
  // console.log(newS.length);
  let summOfLetter = 0;
  for (let i=0; i<newS.length; i++) {
    // console.log('searching for -', newS[i]);
    // console.log('includes newS1 -', newS1.filter(item => item === newS[i]));
    // console.log('includes newS2 -', newS2.filter(item => item === newS[i]));
    if ((newS1.filter(item => item === newS[i]).length >=1)&&(newS2.filter(item => item === newS[i]).length >=1)) {
      summOfLetter = summOfLetter + (newS1.filter(item => item === newS[i]).length > newS2.filter(item => item === newS[i]).length ? newS2.filter(item => item === newS[i]).length : newS1.filter(item => item === newS[i]).length);
    }
  }
  // console.log('includes', newS2.filter(item => item === newS1[0]));

  return summOfLetter;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
