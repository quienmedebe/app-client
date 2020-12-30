import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();
import 'react-native-get-random-values';

import {AppRegistry, LogBox} from 'react-native';
import App from './App.jsx';
import {name as appName} from './app.json';

// Needed to ignore react-native-paper warning: https://github.com/callstack/react-native-paper/issues/639
LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
