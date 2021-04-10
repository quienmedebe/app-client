import React from 'react';
import {render} from '@testing-library/react-native';
import AppErrorView from './AppErrorView';

describe('AppError test suite', () => {
  test('It should render without crashing', () => {
    expect(() => render(<AppErrorView />)).not.toThrow();
  });
});
