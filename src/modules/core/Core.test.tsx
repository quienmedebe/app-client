import Core from './index';

describe('Core test suite', () => {
  test('it should have a static restart function', () => {
    const typeofRestart = typeof Core.restart;
    expect(typeofRestart).toBe('function');
  });
});
