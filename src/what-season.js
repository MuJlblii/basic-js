const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if ((typeof date === 'date') || (date instanceof Date)) {
    let winter = [11, 0, 1];
    let spring = [2, 3, 4];
    let summer = [5, 6, 7];
    let autumn = [8, 9, 10];

    let fakeDate = date.toString();
    let controlFakeDate = Date.parse(fakeDate);
    if (controlFakeDate.length > 10) {
      let takingMonth = date.getMonth();
      if (winter.includes(takingMonth)) {
        return 'winter';
      }
      if (spring.includes(takingMonth)) {
        return 'spring';
      }
      if (summer.includes(takingMonth)) {
        return 'summer';
      }
      if (autumn.includes(takingMonth)) {
        return 'autumn';
      } else {
        return "Unable to determine the time of year!";
      }
    } else {
      throw new NotImplementedError('Invalid date!');
    }
  } else {
    throw new NotImplementedError('Invalid date!');
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
