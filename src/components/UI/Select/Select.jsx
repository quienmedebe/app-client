import React, {useMemo} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {backgroundLight, main, text, error as errorColor} from '../../../theme/colors';

const Select = ({error, style, ...props}) => {
  const parsedStyles = useMemo(() => {
    return {
      inputIOS: {
        height: 55,
        paddingLeft: 15,
        borderColor: error ? errorColor : backgroundLight,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        fontSize: 16,
        color: text,
      },
      inputAndroid: {
        height: 55,
        borderWidth: 1,
        borderColor: error ? errorColor : backgroundLight,
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
        color: error ? errorColor : text,
        fontSize: 16,
      },
      ...style,
    };
  }, [style, error]);

  return <RNPickerSelect itemKey='value' useNativeAndroidPickerStyle={false} style={parsedStyles} {...props} />;
};

export default Select;
