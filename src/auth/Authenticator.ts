import { LoginData } from '../safe';

export interface Token {
    jwt: string;
    decoded: Record<string, string>;
}

export interface Tokens {
    accessToken: Token;
    idToken: Token;
}

export interface Authenticator {
    login(credentials: LoginData): Promise<void>;

    hasTokens(): boolean;

    getTokens(): Tokens;
}
