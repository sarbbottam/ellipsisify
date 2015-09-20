var assert = require('chai').assert;

describe('ellipsisify', function() {
  var ellipsisify;
  var string;
  var threshold;
  var expectedResult;
  var actualResult;

  before(function() {
    ellipsisify = require('../src/ellipsisify');
  });

  beforeEach(function() {
    string = '';
    threshold = 0;
    expectedResult = '';
    actualResult = '';
  });

  it('should return an object with center method', function() {
    assert.isObject(ellipsisify);
    assert.isFunction(ellipsisify.center);
  });

  it('should not ellipsisify if threshold is more than the string length', function() {
    string = 'abcdefghij';
    threshold = 10;
    expectedResult = string;
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should return the string as is, if no threshold is provided', function() {
    string = 'abcdefghij';
    threshold = null;
    expectedResult = string;
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should return empty string, if no string is provided', function() {
    string = null;
    expectedResult = '';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should ellipsisify \'abcdefghij\' to \'abc...ij\' with threshold 8', function() {
    string = 'abcdefghij';
    threshold = 8;
    expectedResult = 'abc...ij';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should ellipsisify \'abcdefghij\' to \'ab...j\' with threshold 6', function() {
    string = 'abcdefghij';
    threshold = 6;
    expectedResult = 'ab...j';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should ellipsisify \'abcdefghij\' to \'a...j\' with threshold 5', function() {
    string = 'abcdefghij';
    threshold = 5;
    expectedResult = 'a...j';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should throw error if threshold is less than 5', function() {
    string = 'abcdefghij';
    threshold = 4;
    expectedResult = 'minimum threshold should be 5';
    try {
      actualResult = ellipsisify.center(string, threshold);
    } catch (e) {
      assert.equal(expectedResult, e.message);
    }
  });

});
