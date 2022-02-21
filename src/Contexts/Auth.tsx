import { createContext } from 'react';

interface AuthPropsProvider{
    children: JSX.Element
}
const defaultState = {
    login: false
}

export const authContext = createContext(defaultState)

export function AuthProvider ({children}:AuthPropsProvider) {
    
    return (
        <authContext.Provider value={defaultState}>
            {children}
        </authContext.Provider>
    )
}