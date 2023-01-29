import React from 'react';

import { AuthProvider } from './AuthContext';

interface AppProviderData {
  children?: JSX.Element
}

// @ts-ignore
export const AppProvider: React.FC = ({ children }: AppProviderData) => (
// @ts-ignore
  <AuthProvider>
      { children }
  </AuthProvider>
)