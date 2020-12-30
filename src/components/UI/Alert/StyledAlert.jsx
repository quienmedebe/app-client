import React, {useMemo} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {main, error} from '../../../theme/colors';
import {Poppins} from '../../../theme/fonts';

const StyledAlert = ({titleStyle = {}, messageStyle = {}, cancelButtonTextStyle = {}, confirmButtonTextStyle = {}, ...props}) => {
  const titleStyles = useMemo(() => {
    return {
      fontFamily: Poppins.SemiBold,
      fontSize: 24,
      textAlign: 'center',
      textTransform: 'uppercase',
      ...titleStyle,
    };
  }, [titleStyle]);

  const messageStyles = useMemo(() => {
    return {
      fontFamily: Poppins.Regular,
      fontSize: 16,
      textAlign: 'center',
      ...messageStyle,
    };
  }, [messageStyle]);

  const cancelButtonTextStyles = useMemo(() => {
    return {
      fontFamily: Poppins.Regular,
      fontSize: 16,
      ...cancelButtonTextStyle,
    };
  }, [cancelButtonTextStyle]);

  const confirmButtonTextStyles = useMemo(() => {
    return {
      fontFamily: Poppins.Regular,
      fontSize: 16,
      ...confirmButtonTextStyle,
    };
  }, [confirmButtonTextStyle]);

  return (
    <AwesomeAlert
      show
      useNativeDriver
      confirmText='Entendido'
      cancelText='Cancelar'
      cancelButtonColor={error}
      confirmButtonColor={main}
      titleStyle={titleStyles}
      messageStyle={messageStyles}
      cancelButtonTextStyle={cancelButtonTextStyles}
      confirmButtonTextStyle={confirmButtonTextStyles}
      {...props}
    />
  );
};

export default StyledAlert;
