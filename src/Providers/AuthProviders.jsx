import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from './../Firebase/Firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {

    const formSign = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    const authInfo = {
        formSign
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;