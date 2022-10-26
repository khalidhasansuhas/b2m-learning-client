import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const user = {displayName: 'suhas'}

    const providerLogin =(provider) =>{
        return signInWithPopup (auth,provider)
    }

    const userInfo = {
        user,
        providerLogin
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;