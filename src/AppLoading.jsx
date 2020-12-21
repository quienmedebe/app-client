import React from 'react';
import {Image, StyleSheet, StatusBar} from 'react-native';
import {main} from './theme/colors';
import StyledSafeAreaView from './components/UI/SafeAreaView/StyledSafeAreaView';
import CompleteBackground from './components/UI/View/CompleteBackground';
import transparentLogo from '../assets/images/logo-transparent.png';

const AppLoading = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={main} />
      <CompleteBackground background={main}>
        <StyledSafeAreaView style={[styles.mainContainer]}>
          <Image source={transparentLogo} style={[styles.imageLogo]} />
        </StyledSafeAreaView>
      </CompleteBackground>
    </>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 200,
    height: 200,
  },
});
