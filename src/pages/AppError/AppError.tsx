import React, {useCallback} from 'react';
import AppErrorView from './AppErrorView';
import Core from '../../modules/core';

const AppError: React.FC = () => {
  const restartHandler = useCallback(() => {
    Core.restart();
  }, []);

  return <AppErrorView restartHandler={restartHandler} />;
};

export default AppError;
