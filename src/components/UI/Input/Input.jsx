import React, {useMemo} from 'react';
import {TextInput} from 'react-native-paper';
import {Platform} from 'react-native';
import color from 'color';
import {main, text} from '../../../theme/colors';

const Input = ({...props}) => {
  const defaultSelectorColor = useMemo(() => {
    if (Platform.OS === 'android') {
      return color.rgb(text).fade(0.5).string();
    }

    return text;
  }, []);

  return <TextInput mode='outlined' selectionColor={defaultSelectorColor} {...props} />;
};

Input.defaultProps = {
  theme: {
    colors: {background: main, text: text, primary: text, placeholder: text},
  },
};

export default Input;
