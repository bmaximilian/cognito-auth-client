import React, { useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';
import { Steps } from './components/Steps';
import { LoginData, LoginForm } from './widgets/LoginForm';
import { SavedEntry, SavedEntryList } from './widgets/SavedEntryList';

const items = [{ title: 'test 1' }, { title: 'test 2' }];

const App: React.FC = () => {
    const [step, setStep] = useState(1);

    function handleLoadSavedEntry(item: SavedEntry): void {
        setStep(2);
    }

    function handleAddEntry(): void {
        setStep(2);
    }

    function handleLogin(data: LoginData): void {
        setStep(3);
    }

    const steps = [
        <SavedEntryList key={0} items={items} onAdd={handleAddEntry} onItemClick={handleLoadSavedEntry} />,
        <LoginForm key={1} onSubmit={handleLogin} />,
    ];

    return (
        <Container mt={{ base: '2rem', md: '20vh' }} transition="margin-top .5s">
            <Steps steps={3} currentStep={step} />
            {steps[step - 1]}
        </Container>
    );
};

export default App;
