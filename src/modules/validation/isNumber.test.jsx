import isNumber from './isNumber';

describe('isNumber test suite', () => {
  test('should return true if the argument is 10', () => {
    expect(isNumber(10)).toBe(true);
  });

  test('should return false if the argument is not of the type number', () => {
    expect(isNumber('10')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
  });

  test('should return false if the argument is infinite or NaN', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
  });
});
