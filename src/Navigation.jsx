import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {text, main, separator} from './theme/colors';
import {Poppins} from './theme/fonts';

import HeaderLeft from './components/UI/Header/HeaderLeft';
import HeaderRight from './components/UI/Header/HeaderRight';

import Overview from './pages/Overview/Overview';
import Balance from './pages/Balance/Balance';
import DebtList from './pages/DebtList/DebtList';
import DebtEditor from './pages/DebtEditor/DebtEditor';

const Drawer = createDrawerNavigator();
const OverviewStack = createStackNavigator();
const BalanceStack = createStackNavigator();
const DebtListStack = createStackNavigator();

const defaultStackNavigatorOptions = {
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
  headerRight: props => <HeaderRight {...props} />,
};

const defaultDrawerNavigatorOptions = {};

const OverviewStackComponent = () => {
  return (
    <OverviewStack.Navigator initialRouteName='Overview' screenOptions={defaultStackNavigatorOptions}>
      <OverviewStack.Screen name='Overview' component={Overview} options={{title: 'Resumen'}} />
      <OverviewStack.Screen name='AddDebt' component={DebtEditor} options={{title: 'Añadir deuda'}} />
      <OverviewStack.Screen name='EditDebt' component={DebtEditor} options={{title: 'Editar deuda'}} />
    </OverviewStack.Navigator>
  );
};
const BalanceStackComponent = () => {
  return (
    <BalanceStack.Navigator initialRouteName='Balance' screenOptions={defaultStackNavigatorOptions}>
      <BalanceStack.Screen name='Balance' component={Balance} options={{title: 'Balance'}} />
    </BalanceStack.Navigator>
  );
};
const DebtListStackComponent = () => {
  return (
    <DebtListStack.Navigator initialRouteName='DebtList' screenOptions={defaultStackNavigatorOptions}>
      <DebtListStack.Screen name='DebtList' component={DebtList} options={{title: 'Todas las deudas'}} />
      <DebtListStack.Screen name='DebtEditor' component={DebtEditor} />
    </DebtListStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Overview' drawerPosition='right' hideStatusBar>
      <Drawer.Screen name='Overview' component={OverviewStackComponent} options={{...defaultDrawerNavigatorOptions, title: 'Resumen'}} />
      <Drawer.Screen name='Balance' component={BalanceStackComponent} options={{...defaultDrawerNavigatorOptions, title: 'Balance'}} />
      <Drawer.Screen name='DebtList' component={DebtListStackComponent} options={{...defaultDrawerNavigatorOptions, title: 'Lista de deudas'}} />
    </Drawer.Navigator>
  );
};

export default Navigation;
