const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // constructor(arr)
  calculateDepth(/*arr*/) {
    // function lengthArray(itemOfArray, depth) {
    //   if (Array.isArray(itemOfArray)) {
    //     depth++;
    //     for (let i = 0; i < itemOfArray.length; i++) {
    //       if (Array.isArray(itemOfArray[i])) {
    //         return lengthArray(itemOfArray[i],depth);
    //       }
    //       // return lengthArray(itemOfArray[i],depth);
    //     }
    //     return lengthArray(0,depth);
    //   } else return depth;
      
    // }
    // let depth = lengthArray(arr,0);
    // return depth;
    // console.log(arr);
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
