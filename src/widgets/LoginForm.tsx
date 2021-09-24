import React, { useEffect, useState } from 'react';
import { Checkbox, Stack } from '@chakra-ui/react';
import equals from 'deep-equal';
import { FormGroup } from '../components/FormGroup';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { PinModal } from '../components/PinModal';
import { useSafe, LoginData } from '../safe';

export interface InitialLoginData extends LoginData {
    title: string;
}

export const LoginForm: React.FC<{
    onSubmit: (data: LoginData) => Promise<void>;
    onComplete: () => void;
    initialData?: InitialLoginData;
}> = (props) => {
    const [title, setTitle] = useState('');
    const [userPoolClientId, setUserPoolClientId] = useState('');
    const [userPoolClientSecret, setUserPoolClientSecret] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [scope, setScope] = useState('');
    const [save, setSave] = useState(false);

    const [showPinModal, setShowPinModal] = useState(false);
    const safe = useSafe();

    useEffect(() => {
        setTitle(props.initialData?.title || '');
        setUserPoolClientId(props.initialData?.userPoolClient.id || '');
        setUserPoolClientSecret(props.initialData?.userPoolClient.secret || '');
        setUsername(props.initialData?.username || '');
        setPassword(props.initialData?.password || '');
        setScope(props.initialData?.metadata.scope || '');
        setSave(!!props.initialData?.save);
    }, [props.initialData]);

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
            const data = buildForm();
            await props.onSubmit(data);

            if (save && !equals({ title, ...data }, props.initialData)) {
                setShowPinModal(true);
                return;
            }

            props.onComplete();
        } catch (e) {
            // TODO: Display error
        }
    }

    async function handlePinEntered(pin: string): Promise<void> {
        await safe.store(title, buildForm(), pin);
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
                    <Input
                        autoFocus
                        placeholder="Title"
                        isRequired
                        value={title}
                        onChange={(e): void => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup title="User Pool Client">
                    <Input
                        placeholder="ID"
                        isRequired
                        value={userPoolClientId}
                        onChange={(e): void => setUserPoolClientId(e.target.value)}
                    />
                    <Input
                        placeholder="Secret"
                        value={userPoolClientSecret}
                        onChange={(e): void => setUserPoolClientSecret(e.target.value)}
                    />
                </FormGroup>
                <FormGroup title="Login">
                    <Input
                        placeholder="Username"
                        value={username}
                        isRequired
                        onChange={(e): void => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        isRequired
                        type="password"
                        value={password}
                        onChange={(e): void => setPassword(e.target.value)}
                    />
                    <Input placeholder="Scope" value={scope} onChange={(e): void => setScope(e.target.value)} />
                </FormGroup>
                <Stack spacing={3}>
                    <Checkbox colorScheme="teal" isChecked={save} onChange={(e): void => setSave(e.target.checked)}>
                        Save for later
                    </Checkbox>
                    <SubmitButton type="submit">Login</SubmitButton>
                </Stack>
            </form>
            <PinModal
                isOpen={showPinModal}
                onPinEntered={handlePinEntered}
                title={`Enter security pin for ${title}`}
                // eslint-disable-next-line max-len
                description="The pin is needed to encrypt and store your saved data securely. To access the remembered data, the pin needs to be re-entered again."
            />
        </>
    );
};
