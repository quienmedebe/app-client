import isNumber from './isNumber';

describe('isNumber test suite', () => {
  test('should return true if the parameter is 10', () => {
    expect(isNumber(10)).toBe(true);
  });
});
