/**
 * Created by matt on 2/21/16.
 */
'use strict';

module.exports = input => {

  if (input === undefined || input === null) throw new TypeError("Input may not be null or undefined!");
  if (input.match("[^a-zA-Z]+")) throw new TypeError("Input must be alphabetic only!");

  const str = input;
  const length = str.length;
  if (length === 0) return '';
  if (length === 1) return str;

  let compressed = '';
  let currentLetter;
  let previousLetter = '';
  let duplicateCount = 1;
  let currentIndex = -1;

  while (currentIndex < length) {
    currentLetter = str[++currentIndex];
    if (currentLetter === previousLetter) {
      duplicateCount++;
    } else if (duplicateCount > 1) {
      compressed += previousLetter;
      compressed += duplicateCount;
      duplicateCount = 1;
      previousLetter = currentLetter;
    } else {
      compressed += previousLetter;
      previousLetter = currentLetter;
    }
  }
  return compressed;
};


