import React, {useMemo} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {backgroundLight, main, text} from '../../../theme/colors';

const Select = ({style, ...props}) => {
  const parsedStyles = useMemo(() => {
    return {
      ...styles,
      ...style,
    };
  }, [style]);

  return <RNPickerSelect itemKey='value' useNativeAndroidPickerStyle={false} style={parsedStyles} {...props} />;
};

const styles = {
  inputIOS: {
    height: 55,
    paddingLeft: 15,
    borderColor: backgroundLight,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    fontSize: 16,
    color: text,
  },
  inputAndroid: {
    height: 55,
    borderWidth: 1,
    borderColor: backgroundLight,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 16,
    color: text,
  },
  viewContainer: {
    backgroundColor: main,
  },
  placeholder: {
    color: text,
    fontSize: 16,
  },
};

export default Select;
