import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';
import { Steps } from './components/Steps';
import { InitialLoginData, LoginForm } from './widgets/LoginForm';
import { SavedEntry, SavedEntryList } from './widgets/SavedEntryList';
import { TokenDisplay } from './widgets/TokenDisplay';
import { BackButton } from './components/BackButton';
import { useSafe, LoginData } from './safe';
import { PinModal } from './components/PinModal';

const App: React.FC = () => {
    const safe = useSafe();
    const [step, setStep] = useState(1);
    const [items, setItems] = useState<SavedEntry[]>();
    const [prefilledData, setPrefilledData] = useState<InitialLoginData>();
    const [requestedDataKey, setRequestedDataKey] = useState<string>();

    useEffect(() => {
        safe.keys().then((storedItems) => {
            setItems(storedItems.map((title) => ({ title })));
            if (!storedItems.length) {
                setStep(2);
            }
        });
    }, []);

    async function handlePinEntered(pin: string): Promise<void> {
        if (!requestedDataKey) return;

        const dataFromStore = await safe.get(requestedDataKey, pin);

        setPrefilledData({
            ...dataFromStore,
            title: requestedDataKey,
        });
        setStep(2);
        setRequestedDataKey(undefined);
    }

    async function handleLogin(data: LoginData): Promise<void> {
        return Promise.resolve();
    }

    function handleLoginComplete(): void {
        setPrefilledData(undefined);
        setStep(3);
    }

    function handleGoBack(): void {
        setStep((current) => current - 1);
    }

    if (!items) {
        return null;
    }

    const steps = [
        <SavedEntryList
            key={0}
            items={items}
            onAdd={(): void => setStep(2)}
            onItemClick={({ title }): void => setRequestedDataKey(title)}
        />,
        <LoginForm key={1} onSubmit={handleLogin} onComplete={handleLoginComplete} initialData={prefilledData} />,
        <TokenDisplay
            key={2}
            // eslint-disable-next-line max-len
            accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            // eslint-disable-next-line max-len
            idToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        />,
    ];

    return (
        <Container mt={{ base: '2rem', md: '20vh' }} transition="margin-top .5s">
            <Steps steps={steps.length} currentStep={step} />
            {step !== 1 && (step !== 2 || items.length > 0) && <BackButton onClick={handleGoBack} />}
            {steps[step - 1]}
            <PinModal
                isOpen={!!requestedDataKey}
                onPinEntered={handlePinEntered}
                title={`Enter security pin for ${requestedDataKey}`}
                description="The pin is needed to decrypt your saved data and prefill the form."
            />
        </Container>
    );
};

export default App;
