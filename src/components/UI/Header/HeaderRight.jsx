import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {backgroundLight} from '../../../theme/colors';

const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Icon name='menu' color={backgroundLight} size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default HeaderRight;
