import React from 'react';
import {render} from '@testing-library/react-native';
import AppError from './AppError';

describe('AppError test suite', () => {
  test('It should render without crashing', () => {
    expect(() => render(<AppError />)).not.toThrow();
  });
});
