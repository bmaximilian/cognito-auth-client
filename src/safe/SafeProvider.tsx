import React, { createContext, useContext } from 'react';
import { AES, enc } from 'crypto-js';
import merge from 'deepmerge';

export declare type DeepPartial<T> = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface LoginData {
    userPool: {
        id: string;
        region: string;
        clientId: string;
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

const undefinedData: DeepPartial<LoginData> = {
    userPool: {
        id: undefined,
        region: undefined,
        clientId: undefined,
        secret: undefined,
    },
    username: undefined,
    password: undefined,
    metadata: {
        scope: undefined,
    },
    save: true,
};

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
            return merge(undefinedData, JSON.parse(decrypted)) as LoginData;
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
