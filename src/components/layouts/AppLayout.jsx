import React from 'react';
import CompleteBackground from '../UI/View/CompleteBackground';
import StyledSafeAreaView from '../UI/SafeAreaView/StyledSafeAreaView';
import {main} from '../../theme/colors';
import {StatusBar} from 'react-native';

const AppLayout = ({children, ...props}) => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={main} />
      <CompleteBackground background={main} {...props}>
        <StyledSafeAreaView>{children}</StyledSafeAreaView>
      </CompleteBackground>
    </>
  );
};

export default AppLayout;
