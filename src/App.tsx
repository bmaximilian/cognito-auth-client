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
import { useAuthentication } from './auth';

const App: React.FC = () => {
    const safe = useSafe();
    const auth = useAuthentication();
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
        await auth.login(data);
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
        <TokenDisplay key={2} />,
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
