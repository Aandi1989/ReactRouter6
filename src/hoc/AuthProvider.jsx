import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (newUser, callBack) => {
        setUser(newUser);
        callBack();
    };
    const signOut = (callBack) => {
        setUser(null);
        callBack();
    };

    const value = {user, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}