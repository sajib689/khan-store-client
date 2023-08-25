import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from './../Firebase/Firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const formSign = ( email, password, name, file) => {
        return createUserWithEmailAndPassword(auth, email, password, name, file)
        .then( result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        formSign,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;