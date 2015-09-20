'use strict';

var MIN_THRESHOLD_CENTER = 5;
var MIN_THRESHOLD_LEFT = 4;

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

  if (threshold < MIN_THRESHOLD_CENTER) {
    throw { message: 'minimum threshold should be ' + MIN_THRESHOLD_CENTER };
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

  if (threshold < MIN_THRESHOLD_LEFT) {
    throw { message: 'minimum threshold should be ' + MIN_THRESHOLD_LEFT };
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
