const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let t = false;
  if (typeof sampleActivity === 'string' || sampleActivity instanceof String) {
    if (Number(sampleActivity)) {
      newSambleActivity = Number(sampleActivity)
    } else {
      return false;
    }
    if ((newSambleActivity <=0)||(newSambleActivity >=15.0)) {
      return false;
    } else {
      let k = 0.693/HALF_LIFE_PERIOD;
      t = Math.ceil(Math.log(MODERN_ACTIVITY/newSambleActivity)/k);
    }
    
  } else {
    return false;
  }
  
  return t;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
