import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { handleSignOut } from '../components/Login/LoginManager';
export const loginContext = createContext()

function getCartFromsessionStorage() {
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {isSignedIn: false, name: '',  email: '', photo: '',}
}
const LoginContextProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(getCartFromsessionStorage);
    const signOut = () => {
            handleSignOut()
                .then(res => {
                    setLoggedInUser(res)
                })
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('user')
        }
    return (
        <loginContext.Provider value={{loggedInUser, setLoggedInUser, signOut}}>
            {children}
        </loginContext.Provider>
    );
};

export default LoginContextProvider;