import React, {useEffect} from 'react';
// import SplashScreen from 'react-native-splash-screen';
import {ErrorBoundary} from 'react-error-boundary';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/redux/store';
import AppManager from './src/AppManager';
import AppError from './src/AppError';
// import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <ErrorBoundary FallbackComponent={AppError}>
      {/* <NavigationContainer> */}
      <ReduxProvider store={store}>
        <AppManager />
      </ReduxProvider>
      {/* </NavigationContainer> */}
    </ErrorBoundary>
  );
};

export default App;
