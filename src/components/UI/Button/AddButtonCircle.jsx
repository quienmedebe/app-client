import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {backgroundLight, info} from '../../../theme/colors';

const AddButtonCircle = ({iconProps, ...props}) => {
  return (
    <TouchableOpacity style={[styles.btn]} {...props}>
      <Icon name='add' size={36} color={backgroundLight} {...iconProps} />
    </TouchableOpacity>
  );
};

AddButtonCircle.defaultProps = {
  iconProps: {},
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: info,
    padding: 15,
    borderRadius: 400,
  },
});

export default AddButtonCircle;
