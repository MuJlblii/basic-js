const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let steps = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  if (Array.isArray(arr)) {
    let newArray = [];
    for (let i=0; i < arr.length; i++) {
      if ((arr[i] === steps[0])) { //&&(arr[i-2] != )) {   // '--discard-next'
        if (i+1 != arr.length) {
          i++;
        } else {continue;}
      } else if ((arr[i] === steps[1])) {                 // '--discard-prev'
        if (i!=0) {
          if ((arr[i-2] != steps[0])&&(arr[i-2] != steps[2])) {
            newArray.pop() ? newArray.pop() : 0;
          } else if (arr[i-2] === steps[2]) {
            newArray.pop();
          }
          
        } else {continue;}
      } else if (arr[i] === steps[2]) {                     //  '--double-next'
        if (i+1 != arr.length) {
          i++;
          newArray.push(arr[i]);
          newArray.push(arr[i]);
        } else {continue;}
      } else if ((arr[i] === steps[3])) {                   // '--double-prev'
        if (i!=0) {
          if ((arr[i-2] != steps[0])&&(arr[i-2] != steps[2])){
            newArray.push(arr[i-1]);
            newArray.push(arr[i-1]);
          } else if (arr[i-2] === steps[2]) {
            newArray.push(arr[i-1]);
          } else {
            continue;
          }
        } else {continue;}
        
      }
      else {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  else {
    throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
