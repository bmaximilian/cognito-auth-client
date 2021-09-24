import React, { createContext, useContext } from 'react';
import { AES, enc } from 'crypto-js';

export interface LoginData {
    userPoolClient: {
        id: string;
        secret?: string;
    };
    username: string;
    password: string;
    metadata: {
        scope?: string;
    };
    save: boolean;
}

interface Safe {
    getAll(): Promise<{ [key: string]: string }>;

    get(key: string, pin: string): Promise<LoginData>;

    keys(): Promise<string[]>;

    store(key: string, value: LoginData, pin: string): Promise<void>;
}

const SafeContext = createContext<Safe | undefined>(undefined);

export const SafeProvider: React.FC = (props) => {
    const safe: Safe = {
        async getAll(): Promise<{ [key: string]: string }> {
            return JSON.parse(localStorage.getItem('savedLogins') || '{}');
        },
        async keys(): Promise<string[]> {
            return Object.keys(await this.getAll());
        },
        async get(key: string, pin: string): Promise<LoginData> {
            const entries = await this.getAll();

            if (!entries[key]) {
                throw new Error(`No data found for key ${key}`);
            }

            const decrypted = AES.decrypt(entries[key], pin).toString(enc.Utf8);
            return JSON.parse(decrypted);
        },
        async store(key: string, value: LoginData, pin: string): Promise<void> {
            const entries = this.getAll();
            const encrypted = AES.encrypt(JSON.stringify(value), pin).toString();

            localStorage.setItem(
                'savedLogins',
                JSON.stringify({
                    ...entries,
                    [key]: encrypted,
                })
            );
        },
    };

    return <SafeContext.Provider value={safe}>{props.children}</SafeContext.Provider>;
};

export function useSafe(): Safe {
    const safe = useContext(SafeContext);

    if (!safe) {
        throw new Error(`Component that calls useSafe needs to be a deep child of <SafeProvider>`);
    }

    return safe;
}
