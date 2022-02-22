import { createContext } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-conf'

interface AuthPropsProvider{
    children: JSX.Element
}
const defaultState = {
    signup: (email:string,password:string)=> {},
    login: (email:string, password:string)=> {},
}

export const authContext = createContext(defaultState)

export function AuthProvider ({children}:AuthPropsProvider) {
    
    const signup = (email:string, password:string) => 
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email:string, password:string) => 
        signInWithEmailAndPassword(auth, email, password)

    return (
        <authContext.Provider value={{signup, login}}>
            {children}
        </authContext.Provider>
    )
}