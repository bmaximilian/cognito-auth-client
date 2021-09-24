import React, { useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';
import { Steps } from './components/Steps';
import { LoginData, LoginForm } from './widgets/LoginForm';
import { SavedEntry, SavedEntryList } from './widgets/SavedEntryList';
import { TokenDisplay } from './widgets/TokenDisplay';
import { BackButton } from './components/BackButton';

const items: SavedEntry[] = [];

const App: React.FC = () => {
    const [step, setStep] = useState(1);

    function handleLoadSavedEntry(item: SavedEntry): void {
        setStep(2);
    }

    function handleAddEntry(): void {
        setStep(2);
    }

    async function handleLogin(data: LoginData): Promise<void> {
        setStep(3);
    }

    function handleGoBack(): void {
        setStep((current) => current - 1);
    }

    const steps = [
        <SavedEntryList key={0} items={items} onAdd={handleAddEntry} onItemClick={handleLoadSavedEntry} />,
        <LoginForm key={1} onSubmit={handleLogin} />,
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
        </Container>
    );
};

export default App;
