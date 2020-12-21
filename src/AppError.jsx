import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';
import RNRestart from 'react-native-restart';
import {RestartAndroid} from 'react-native-restart-android';
import {main, backgroundLight} from './theme/colors';
import StyledSafeAreaView from './components/UI/SafeAreaView/StyledSafeAreaView';
import H1 from './components/UI/Text/H1';
import CompleteBackground from './components/UI/View/CompleteBackground';
import StyledButtonOpacityMain from './components/UI/Button/StyledButtonOpacityMain';

const AppError = () => {
  const resetAppHandler = useCallback(() => {
    if (Platform.OS === 'android') {
      RestartAndroid.restart();
    } else {
      RNRestart.Restart();
    }
  }, []);

  const ButtonLabel = useMemo(() => {
    if (Platform.OS === 'android') {
      return 'Cerrar app';
    }

    return 'Reiniciar app';
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={main} />
      <CompleteBackground background={main}>
        <StyledSafeAreaView style={[styles.mainContainer]}>
          <View style={[styles.box, styles.boxPosition]}>
            <H1 style={[styles.title]}>Algo ha fallado en la aplicación</H1>
            <StyledButtonOpacityMain style={[styles.buttonPosition]} onPress={resetAppHandler}>
              {ButtonLabel}
            </StyledButtonOpacityMain>
          </View>
        </StyledSafeAreaView>
      </CompleteBackground>
    </>
  );
};

export default AppError;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  box: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
    borderRadius: 25,
    backgroundColor: backgroundLight,
  },
  boxPosition: {
    marginVertical: 50,
  },
  title: {
    textAlign: 'center',
    marginVertical: 15,
  },
  buttonPosition: {
    marginVertical: 15,
  },
});
