import { createContext } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-conf'

interface AuthPropsProvider{
    children: JSX.Element
}
const defaultState = {
    signup: (user:string,password:string)=> {},
}

export const authContext = createContext(defaultState)

export function AuthProvider ({children}:AuthPropsProvider) {
    
    const signup = (user:string, password:string) => 
        createUserWithEmailAndPassword(auth, user, password)

    return (
        <authContext.Provider value={{signup}}>
            {children}
        </authContext.Provider>
    )
}