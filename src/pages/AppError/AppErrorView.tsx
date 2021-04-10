import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface IProps {
  restartHandler: () => void;
}

const AppErrorView: React.FC<IProps> = props => {
  return (
    <View>
      <TouchableOpacity accessibilityLabel='Restart App' onPress={props.restartHandler}>
        <Text>Restart App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppErrorView;
