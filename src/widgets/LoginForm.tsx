import React, { useEffect, useState } from 'react';
import { Checkbox, SlideFade, Stack } from '@chakra-ui/react';
import equals from 'deep-equal';
import { FormGroup } from '../components/FormGroup';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { PinModal } from '../components/PinModal';
import { useSafe, LoginData } from '../safe';
import { ErrorBanner } from '../components/ErrorBanner';
import { DescriptionBox } from '../components/DescriptionBox';

export interface InitialLoginData extends LoginData {
    title: string;
}

export const LoginForm: React.FC<{
    onSubmit: (data: LoginData) => Promise<void>;
    onComplete: () => void;
    initialData?: InitialLoginData;
}> = (props) => {
    const [title, setTitle] = useState('');
    const [userPoolId, setUserPoolId] = useState('');
    const [userPoolRegion, setUserPoolRegion] = useState('');
    const [userPoolClientId, setUserPoolClientId] = useState('');
    const [userPoolClientSecret, setUserPoolClientSecret] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [scope, setScope] = useState('');
    const [save, setSave] = useState(false);
    const [error, setError] = useState<string>();

    const [isLoading, setLoading] = useState(false);
    const [showPinModal, setShowPinModal] = useState(false);
    const safe = useSafe();

    useEffect(() => {
        setTitle(props.initialData?.title || '');
        setUserPoolId(props.initialData?.userPool.id || '');
        setUserPoolRegion(props.initialData?.userPool.region || 'eu-central-1');
        setUserPoolClientId(props.initialData?.userPool.clientId || '');
        setUserPoolClientSecret(props.initialData?.userPool.secret || '');
        setUsername(props.initialData?.username || '');
        setPassword(props.initialData?.password || '');
        setScope(props.initialData?.metadata.scope || '');
        setSave(!!props.initialData?.save);
    }, [props.initialData]);

    function buildForm(): LoginData {
        return {
            userPool: {
                id: userPoolId,
                region: userPoolRegion,
                clientId: userPoolClientId,
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

    function completeLogin(): void {
        props.onComplete();
        setLoading(false);
    }

    async function handleSubmit(): Promise<void> {
        try {
            setLoading(true);
            const data = buildForm();
            await props.onSubmit(data);

            const dataWithTitle = { title, ...data };

            if (save && !equals(dataWithTitle, props.initialData)) {
                setShowPinModal(true);
                return;
            }

            completeLogin();
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    }

    async function handlePinEntered(pin: string): Promise<void> {
        await safe.store(title, buildForm(), pin);
        setShowPinModal(false);
        completeLogin();
    }

    return (
        <SlideFade in offsetY="2rem">
            <DescriptionBox>
                Fill out this form to test the login with a specific user pool client.
                <br />
                The <strong>title</strong> entered in the application section will be used to store the data set if{' '}
                <strong>Save for later</strong> is activated.
            </DescriptionBox>
            <form
                onSubmit={(e): void => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <FormGroup title="Application">
                    <Input
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
                        value={userPoolId}
                        onChange={(e): void => setUserPoolId(e.target.value)}
                    />
                    <Input
                        placeholder="Region"
                        isRequired
                        value={userPoolRegion}
                        onChange={(e): void => setUserPoolRegion(e.target.value)}
                    />
                    <Input
                        placeholder="Client ID"
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
                    {!!error && <ErrorBanner title="Error during login" message={error} />}
                    <SubmitButton isLoading={isLoading} type="submit" loadingText="Signing in">
                        Login
                    </SubmitButton>
                </Stack>
            </form>
            <PinModal
                isOpen={showPinModal}
                onPinEntered={handlePinEntered}
                title={`Enter security pin for ${title}`}
                // eslint-disable-next-line max-len
                description="The pin is needed to encrypt and store your saved data securely. To access the remembered data, the pin needs to be re-entered again."
            />
        </SlideFade>
    );
};
