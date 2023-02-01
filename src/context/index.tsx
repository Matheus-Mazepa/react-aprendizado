import React, {ReactNode} from 'react';

import { AuthProvider } from './AuthContext';

interface AuthProviderData {
  children?: ReactNode
}

export const AppProvider: React.FC = ({ children }: AuthProviderData) => (
  <AuthProvider>
      { children }
  </AuthProvider>
)