import {configureFonts, DefaultTheme} from 'react-native-paper';
import {Poppins} from './fonts';

const paperFonts = {
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

export const PaperTheme = {
  ...DefaultTheme,
  dark: true,
  roundness: 5,
  fonts: configureFonts(paperFonts),
  colors: {
    ...DefaultTheme.colors,
  },
};
