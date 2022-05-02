const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newDomains = [];
  let totaDNS;
  let maxOfItem = 0;
  for (let i=0; i<domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
    maxOfItem = maxOfItem <= domains[i].length ? domains[i].length : maxOfItem;  
    // console.log(domains[i]);
  }
  // console.log(domains.flat());
  for (let i = 0; i < domains.length; i++) {
    newDomains.push([]);
    for (let j=0; j < domains[i].length; j++) {
      newDomains[i].push(domains[i][j]);
      if (j!=0) {
        newDomains[i][j] = newDomains[i][j-1] + '.' + newDomains[i][j];
      } //else {
      //   newDomains[i][j]
      // }
    }
  }
  let newDomainsFlat = newDomains.flat().sort();
  let setOfDomain = new Set(newDomains.flat().sort());
  let DNS = new Object;
  for (let item of setOfDomain) {
    console.log('item -',item, '// total =', newDomainsFlat.filter(iter => iter === item).length)
    DNS['.'+item] = newDomainsFlat.filter(iter => iter === item).length;
  }

  return DNS;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
module.exports = {
  getDNSStats
};
