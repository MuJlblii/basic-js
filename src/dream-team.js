const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members)) {
      members = members.filter(el=> typeof el === 'string');
      for (let i =0; i<members.length; i++) {
        members[i] = members[i].trim();
      }
      members.sort(function (a, b) {
      return a.localeCompare(b);
    });
      let dreamTeam = '';
      for (let i=0; i<members.length; i++) {
        dreamTeam += members[i][0].toUpperCase();
      }
      return dreamTeam;
    } else {
      return false;
    }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
