import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderLeft = ({canGoBack, onPress}) => {
  if (!canGoBack) {
    return null;
  }

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={onPress}>
        <Icon name='chevron-left' color='white' size={36} />
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
