import React, { useState } from 'react';
import { Auth } from '@aws-amplify/auth';
import { AuthOptions } from '@aws-amplify/auth/lib/types';
import { LoginData } from '../safe';
import { AuthenticationContext } from './AuthenticationContext';
import { Authenticator, Tokens } from './Authenticator';
import { MockTokenStorage } from './MockTokenStorage';

interface CognitoConfig {
    Auth: AuthOptions;
}

export const CognitoAuthenticationProvider: React.FC = (props) => {
    const [tokens, setTokens] = useState<Tokens>();

    const auth: Authenticator = {
        async login(credentials: LoginData): Promise<void> {
            const config: CognitoConfig = {
                Auth: {
                    region: credentials.userPool.region,
                    userPoolId: credentials.userPool.id,
                    userPoolWebClientId: credentials.userPool.clientId,
                    mandatorySignIn: true,
                    storage: new MockTokenStorage(),
                    clientMetadata: credentials.metadata,
                },
            };

            Auth.configure(config);
            await Auth.signIn(credentials.username, credentials.password, { scope: credentials.metadata.scope || '' });

            const session = await Auth.currentSession();
            setTokens({
                accessToken: {
                    jwt: session.getAccessToken().getJwtToken(),
                    decoded: session.getAccessToken().decodePayload(),
                },
                idToken: {
                    jwt: session.getIdToken().getJwtToken(),
                    decoded: session.getIdToken().decodePayload(),
                },
            });
        },
        getTokens(): Tokens {
            if (!tokens) {
                throw new Error('You need to authenticate before calling getTokens()');
            }

            return tokens;
        },
        hasTokens(): boolean {
            return !!tokens;
        },
    };

    return <AuthenticationContext.Provider value={auth}>{props.children}</AuthenticationContext.Provider>;
};
