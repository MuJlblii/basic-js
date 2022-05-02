const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let strN = str;//new String(str);
  let repeatTimes = options['repeatTimes'] ? new Number(options['repeatTimes']) : 1; //устанавливает число повторений `str`
  let separator = options['separator'] ? options['separator'] : '+'; //это строка, разделяющая повторения `str`
  let addition = String(options['addition']) ? String(options['addition']) == 'undefined' ? '' : String(options['addition']) : ''; //это дополнительная строка, которая будет добавлена после каждого повторения `str`
  // let addition = options['addition'] ? String(options['addition']) : ''; //это дополнительная строка, которая будет добавлена после каждого повторения `str`
  let additionRepeatTimes = options['additionRepeatTimes'] ? new Number(options['additionRepeatTimes']): 1; //устанавливает число повторений `addition`
  let additionSeparator = options['additionSeparator'] ? options['additionSeparator'] : '|'; //это строка, разделяющая повторения `addition`
  let additionRepeatTotal = '';
  let index = 0;
  while (index < additionRepeatTimes) {
    if (additionRepeatTimes == 1) {
      additionRepeatTotal = additionRepeatTotal+(addition);
    } else if (index == (additionRepeatTimes-1)) {
      additionRepeatTotal = additionRepeatTotal+(addition);
    } else {
    additionRepeatTotal = additionRepeatTotal+(addition + additionSeparator);
    }
    index++;
  }
  // if (addition != '') {
  //   let additionRepeatTotal = (addition + additionSeparator).repeat(additionRepeatTimes-1 > 0 ? additionRepeatTimes-1 : 0)+addition + additionSeparator;
  // };
    let index2 = 0;
    let strWithRepeat = '';
  while (index2 < repeatTimes) {
    if (repeatTimes == 1) {
      strWithRepeat = strWithRepeat + strN + additionRepeatTotal;
    } else if (index2 == (repeatTimes-1)) {
      strWithRepeat = strWithRepeat + strN + additionRepeatTotal;
    } else {
      strWithRepeat = strWithRepeat + strN + additionRepeatTotal + separator;
    }
    index2++;
  }
  // let strWithRepeat = (strN + additionRepeatTotal + separator).repeat(repeatTimes-1 > 0 ? repeatTimes-1 : 0)+ strN + additionRepeatTotal;
  return strWithRepeat;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
