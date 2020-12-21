import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import StyledText from '../Text/StyledText';
import {error as errorColor} from '../../../theme/colors';

const InputWithValidation = ({error, containerProps, errorMessageProps, ...props}) => {
  return (
    <View {...containerProps}>
      <Controller {...props} />
      {error ? (
        <StyledText style={[styles.errorMessage]} {...errorMessageProps}>
          {error}
        </StyledText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: errorColor,
  },
});

InputWithValidation.defaultProps = {
  containerProps: {},
  errorMessageProps: {},
};

export default InputWithValidation;
