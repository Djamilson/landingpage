import React from 'react';

import { LoadingProvider } from './loading';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <ToastProvider>{children}</ToastProvider>
    </LoadingProvider>
  );
};
export default AppProvider;
