import React, { createContext, useContext, useState } from 'react';

interface AuthContextData {
    authenticated: boolean;
    signIn(): void;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//@ts-ignore
const AuthProvider: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const signIn = () => {
        setAuthenticated(true);
    };

    const signOut = () => {
        setAuthenticated(false);
    };

    return (
      <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
          {children}
      </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
