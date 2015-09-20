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

  it('should return an object with center, left and right method', function() {
    assert.isObject(ellipsisify);
    assert.isFunction(ellipsisify.center);
    assert.isFunction(ellipsisify.left);
    assert.isFunction(ellipsisify.right);
  });

  it('should not ellipsisify if threshold is more than the string length', function() {
    string = 'abcdefghij';
    threshold = 10;
    expectedResult = string;
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
    actualResult = ellipsisify.left(string, threshold);
    assert.equal(expectedResult, actualResult);
    actualResult = ellipsisify.right(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should return the string as is, if no threshold is provided', function() {
    string = 'abcdefghij';
    threshold = null;
    expectedResult = string;
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
    actualResult = ellipsisify.left(string, threshold);
    assert.equal(expectedResult, actualResult);
    actualResult = ellipsisify.right(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should return empty string, if no string is provided', function() {
    string = null;
    expectedResult = '';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
    actualResult = ellipsisify.left(string, threshold);
    assert.equal(expectedResult, actualResult);
    actualResult = ellipsisify.right(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should center ellipsisify \'abcdefghij\' to \'abc...ij\' with threshold 8', function() {
    string = 'abcdefghij';
    threshold = 8;
    expectedResult = 'abc...ij';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should center ellipsisify \'abcdefghij\' to \'ab...j\' with threshold 6', function() {
    string = 'abcdefghij';
    threshold = 6;
    expectedResult = 'ab...j';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should center ellipsisify \'abcdefghij\' to \'a...j\' with threshold 5', function() {
    string = 'abcdefghij';
    threshold = 5;
    expectedResult = 'a...j';
    actualResult = ellipsisify.center(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should throw error if threshold is less than 5 for ellipsisify.center', function() {
    string = 'abcdefghij';
    threshold = 4;
    expectedResult = 'minimum threshold should be 5';
    try {
      actualResult = ellipsisify.center(string, threshold);
    } catch (e) {
      assert.equal(expectedResult, e.message);
    }
  });

  it('should left ellipsisify \'abcdefghij\' to \'...fghij\' with threshold 8', function() {
    string = 'abcdefghij';
    threshold = 8;
    expectedResult = '...fghij';
    actualResult = ellipsisify.left(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should left ellipsisify \'abcdefghij\' to \'...hij\' with threshold 6', function() {
    string = 'abcdefghij';
    threshold = 6;
    expectedResult = '...hij';
    actualResult = ellipsisify.left(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should left ellipsisify \'abcdefghij\' to \'...ij\' with threshold 5', function() {
    string = 'abcdefghij';
    threshold = 5;
    expectedResult = '...ij';
    actualResult = ellipsisify.left(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should throw error if threshold is less than 4 for ellipsisify.left', function() {
    string = 'abcdefghij';
    threshold = 3;
    expectedResult = 'minimum threshold should be 4';
    try {
      actualResult = ellipsisify.left(string, threshold);
    } catch (e) {
      assert.equal(expectedResult, e.message);
    }
  });

  it('should right ellipsisify \'abcdefghij\' to \'abcde...\' with threshold 8', function() {
    string = 'abcdefghij';
    threshold = 8;
    expectedResult = 'abcde...';
    actualResult = ellipsisify.right(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should right ellipsisify \'abcdefghij\' to \'abc...\' with threshold 6', function() {
    string = 'abcdefghij';
    threshold = 6;
    expectedResult = 'abc...';
    actualResult = ellipsisify.right(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should right ellipsisify \'abcdefghij\' to \'ab...\' with threshold 5', function() {
    string = 'abcdefghij';
    threshold = 5;
    expectedResult = 'ab...';
    actualResult = ellipsisify.right(string, threshold);
    assert.equal(expectedResult, actualResult);
  });

  it('should throw error if threshold is less than 4 for ellipsisify.right', function() {
    string = 'abcdefghij';
    threshold = 3;
    expectedResult = 'minimum threshold should be 4';
    try {
      actualResult = ellipsisify.right(string, threshold);
    } catch (e) {
      assert.equal(expectedResult, e.message);
    }
  });

});
