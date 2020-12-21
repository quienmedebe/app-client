import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {appHasLoaded} from './redux/app/app.actions';
import {SPLASH_SCREEN_MS} from './config/config';
import AppLoading from './AppLoading';
import Navigation from './Navigation';

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

  return <Navigation />;
};

export default AppManager;
