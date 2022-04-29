const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  for (let i = 0; i<disksNumber; i++) {
    // if (i===0) {
    //   turns = turns*2;
    // } else {
      turns = turns*2+1;
    // }
  }
  time = Math.floor(turns / (turnsSpeed/3600));
  let result = {'turns' : turns, 'seconds':time} 

  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
