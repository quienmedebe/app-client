module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
    'jest/globals': true,
  },
  plugins: ['react-native', 'react-hooks', 'prettier', 'jest'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', '@react-native-community', 'plugin:jest/recommended', 'plugin:jest/style', 'testing-library'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    'keyword-spacing': 'off',
    'jsx-quotes': 'off',
    'eol-last': 'off',
    quotes: 'off',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'off',
  },
};
