import React, { useState } from 'react';
import { AES } from 'crypto-js';
import { Checkbox, Stack } from '@chakra-ui/react';
import { FormGroup } from '../components/FormGroup';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { PinModal } from '../components/PinModal';

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

export const LoginForm: React.FC<{ onSubmit: (data: LoginData) => Promise<void>; onComplete: () => void }> = (
    props
) => {
    const [title, setTitle] = useState('');
    const [userPoolClientId, setUserPoolClientId] = useState('');
    const [userPoolClientSecret, setUserPoolClientSecret] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [scope, setScope] = useState('');
    const [save, setSave] = useState(false);

    const [showPinModal, setShowPinModal] = useState(false);

    function buildForm(): LoginData {
        return {
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
        };
    }

    async function handleSubmit(): Promise<void> {
        try {
            await props.onSubmit(buildForm());

            if (save) {
                setShowPinModal(true);
                return;
            }

            props.onComplete();
        } catch (e) {
            // TODO: Display error
        }
    }

    function handlePinEntered(pin: string): void {
        const entries = localStorage.getItem('savedLogins') || {};
        const encrypted = AES.encrypt(JSON.stringify(buildForm()), pin).toString();

        localStorage.setItem(
            'savedLogins',
            JSON.stringify({
                ...entries,
                [title]: encrypted,
            })
        );

        setShowPinModal(false);
        props.onComplete();
    }

    return (
        <>
            <form
                onSubmit={(e): void => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <FormGroup title="Application">
                    <Input placeholder="Title" isRequired onChange={(e): void => setTitle(e.target.value)} />
                </FormGroup>
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
                    <Checkbox colorScheme="teal" onChange={(e): void => setSave(e.target.checked)}>
                        Save for later
                    </Checkbox>
                    <SubmitButton type="submit">Login</SubmitButton>
                </Stack>
            </form>
            <PinModal isOpen={showPinModal} onPinEntered={handlePinEntered} />
        </>
    );
};
