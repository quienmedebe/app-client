import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {text, main, separator} from './theme/colors';
import {Poppins} from './theme/fonts';

import HeaderLeft from './components/UI/Header/HeaderLeft';

import Overview from './pages/Overview/Overview';
import Balance from './pages/Balance/Balance';
import DebtEditor from './pages/DebtEditor/DebtEditor';

const Stack = createStackNavigator();

const Navigation = () => {
  const defaultStackNavigatorOptions = useMemo(() => {
    return {
      headerTitleAlign: 'center',
      headerTintColor: text,
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontFamily: Poppins.Light,
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: main,
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: separator,
      },
      headerLeft: props => <HeaderLeft {...props} />,
    };
  }, []);

  return (
    <Stack.Navigator initialRouteName='Overview' screenOptions={defaultStackNavigatorOptions}>
      <Stack.Screen name='Overview' component={Overview} />
      <Stack.Screen name='Balance' component={Balance} />
      <Stack.Screen name='DebtEditor' component={DebtEditor} />
    </Stack.Navigator>
  );
};

export default Navigation;
