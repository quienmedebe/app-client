import React, {useEffect, useMemo} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ErrorBoundary} from 'react-error-boundary';
import {Provider as ReduxProvider} from 'react-redux';
import {configureFonts, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import AppManager from './src/AppManager';
import AppError from './src/AppError';
import {Poppins} from './src/theme/fonts';
import {main, text} from './src/theme/colors';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const paperFonts = useMemo(() => {
    return {
      ios: {
        regular: {
          fontFamily: Poppins.Regular,
          fontWeight: 'normal',
        },
        medium: {
          fontFamily: Poppins.SemiBold,
          fontWeight: 'normal',
        },
        light: {
          fontFamily: Poppins.Light,
          fontWeight: 'normal',
        },
        thin: {
          fontFamily: Poppins.ExtraLight,
          fontWeight: 'normal',
        },
      },
      android: {
        regular: {
          fontFamily: Poppins.Regular,
          fontWeight: 'normal',
        },
        medium: {
          fontFamily: Poppins.SemiBold,
          fontWeight: 'normal',
        },
        light: {
          fontFamily: Poppins.Light,
          fontWeight: 'normal',
        },
        thin: {
          fontFamily: Poppins.ExtraLight,
          fontWeight: 'normal',
        },
      },
    };
  }, []);

  const PaperTheme = useMemo(() => {
    return {
      ...DefaultTheme,
      dark: true,
      roundness: 5,
      fonts: configureFonts(paperFonts),
      colors: {
        ...DefaultTheme.colors,
      },
    };
  }, [paperFonts]);

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
