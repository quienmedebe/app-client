import React from 'react';
import Circle from 'react-native-progress/Circle';
import {text} from '../../../theme/colors';

const CircleIndeterminate = props => {
  return <Circle {...props} />;
};

CircleIndeterminate.defaultProps = {
  indeterminate: true,
  borderWidth: 2,
  borderColor: text,
  size: 30,
};

export default CircleIndeterminate;
