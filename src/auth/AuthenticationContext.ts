import { createContext, useContext } from 'react';
import { Authenticator } from './Authenticator';

export const AuthenticationContext = createContext<Authenticator | undefined>(undefined);

export function useAuthentication(): Authenticator {
    const auth = useContext(AuthenticationContext);

    if (!auth) {
        throw new Error(
            `The component that calls useAuthentication() needs to be a deep child of and authentication context`
        );
    }

    return auth;
}
