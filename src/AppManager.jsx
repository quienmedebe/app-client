import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {appHasLoaded} from './redux/app/app.actions';
import {SPLASH_SCREEN_MS} from './config/config';
import AppLayout from './components/layouts/AppLayout';
import AppLoading from './AppLoading';

const AppManager = () => {
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(appHasLoaded());
    }, SPLASH_SCREEN_MS);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  if (!appState.loaded) {
    return <AppLoading />;
  }

  return (
    <AppLayout>
      <Text>Hello world!</Text>
    </AppLayout>
  );
};

export default AppManager;
