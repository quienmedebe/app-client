import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Overview from './pages/Overview/Overview';
import Balance from './pages/Balance/Balance';
import DebtEditor from './pages/DebtEditor/DebtEditor';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName='Overview'>
      <Stack.Screen name='Overview' component={Overview} />
      <Stack.Screen name='Balance' component={Balance} />
      <Stack.Screen name='DebtEditor' component={DebtEditor} />
    </Stack.Navigator>
  );
};

export default Navigation;
