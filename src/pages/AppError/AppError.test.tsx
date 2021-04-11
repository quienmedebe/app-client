import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AppErrorView from './AppErrorView';

jest.mock('../../modules/core');

const noop = () => {};

const defaultAppErrorViewProps = {
  restartHandler: noop,
};

describe('AppError test suite', () => {
  test('It should render without crashing', () => {
    expect(() => render(<AppErrorView {...defaultAppErrorViewProps} />)).not.toThrow();
  });

  test('It should fire the restart button on press', () => {
    const fakeRestartHandler = jest.fn();
    const {getByA11yLabel} = render(<AppErrorView {...defaultAppErrorViewProps} restartHandler={fakeRestartHandler} />);
    const button = getByA11yLabel(/Restart/i);

    fireEvent.press(button);

    expect(fakeRestartHandler).toHaveBeenCalledTimes(1);
  });
});
