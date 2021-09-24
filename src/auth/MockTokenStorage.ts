import { ICognitoStorage } from 'amazon-cognito-identity-js';

export class MockTokenStorage implements ICognitoStorage {
    private map: Record<string, string> = {};

    public clear(): void {
        this.map = {};
    }

    public getItem(key: string): string | null {
        return this.map[key] || null;
    }

    public removeItem(key: string): void {
        delete this.map[key];
    }

    public setItem(key: string, value: string): void {
        this.map[key] = value;
    }
}
