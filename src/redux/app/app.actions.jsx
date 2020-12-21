import {APP_LOADED} from './app.types';

export const appHasLoaded = () => {
  return {
    type: APP_LOADED,
  };
};
