import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {backgroundLight} from '../../../theme/colors';

const HeaderLeft = ({canGoBack, onPress}) => {
  if (!canGoBack) {
    return null;
  }

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={onPress}>
        <Icon name='chevron-left' color={backgroundLight} size={36} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default HeaderLeft;
