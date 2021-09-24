import React, { useState } from 'react';
import { Checkbox, Stack } from '@chakra-ui/react';
import { FormGroup } from '../components/FormGroup';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';

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

export const LoginForm: React.FC<{ onSubmit: (data: LoginData) => void }> = (props) => {
    const [userPoolClientId, setUserPoolClientId] = useState('');
    const [userPoolClientSecret, setUserPoolClientSecret] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [scope, setScope] = useState('');
    const [save, setSave] = useState(false);

    function handleSubmit(): void {
        props.onSubmit({
            userPoolClient: {
                id: userPoolClientId,
                secret: userPoolClientSecret || undefined,
            },
            username,
            password,
            metadata: {
                scope: scope || undefined,
            },
            save,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup title="User Pool Client">
                <Input placeholder="ID" isRequired onChange={(e): void => setUserPoolClientId(e.target.value)} />
                <Input placeholder="Secret" onChange={(e): void => setUserPoolClientSecret(e.target.value)} />
            </FormGroup>
            <FormGroup title="Login">
                <Input placeholder="Username" isRequired onChange={(e): void => setUsername(e.target.value)} />
                <Input
                    placeholder="Password"
                    isRequired
                    type="password"
                    onChange={(e): void => setPassword(e.target.value)}
                />
                <Input placeholder="Scope" onChange={(e): void => setScope(e.target.value)} />
            </FormGroup>
            <Stack spacing={3}>
                <Checkbox onChange={(e): void => setSave(e.target.checked)}>Save for later</Checkbox>
                <SubmitButton type="submit">Login</SubmitButton>
            </Stack>
        </form>
    );
};
