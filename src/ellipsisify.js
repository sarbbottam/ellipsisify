'use strict';

var ellipsisify;

function center(string, threshold) {
  var mid;
  var length;

  if (!string) {
    return '';
  }

  length = string.length;

  if (!threshold || threshold >= length) {
    return string;
  }

  mid = threshold/2;

  if (threshold < 5) {
    throw { message: 'minimum threshold should be 5' };
  }

  return [string.substring(0, mid - 1), '...',  string.substring(length - (mid + 1) + 3, length)].join('');
}

function left(string, threshold) {
  var length;

  if (!string) {
    return '';
  }

  length = string.length;

  if (!threshold || threshold >= length) {
    return string;
  }

  if (threshold < 4) {
    throw { message: 'minimum threshold should be 4' };
  }

  return ['...',  string.substring(length - (threshold - 3), length)].join('');
}

ellipsisify = {
  center: center,
  left: left
};

/* istanbul ignore next */
if (module && module.exports) {
  module.exports = ellipsisify;
}
