import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ErrorBoundary} from 'react-error-boundary';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import AppManager from './src/AppManager';
import AppError from './src/AppError';
import {PaperTheme} from './src/theme/paper';
import {connectDB} from './src/database';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    connectDB();
  }, []);

  return (
    <ErrorBoundary FallbackComponent={AppError}>
      <NavigationContainer>
        <ReduxProvider store={store}>
          <PaperProvider theme={PaperTheme}>
            <AppManager />
          </PaperProvider>
        </ReduxProvider>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
