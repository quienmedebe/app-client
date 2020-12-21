import {APP_LOADED} from './app.types';

const initialState = {
  loaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED: {
      return {
        ...state,
        loaded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
