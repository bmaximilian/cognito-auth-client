import React, { useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';
import { Steps } from './components/Steps';
import { LoginForm } from './widgets/LoginForm';

const App: React.FC = () => {
    const [step, setStep] = useState(1);

    const steps = [<LoginForm key={1} />];

    return (
        <Container mt={{ base: '2rem', md: '20vh' }} transition="margin-top .5s">
            <Steps steps={3} currentStep={step} />
            {steps[step - 1]}
        </Container>
    );
};

export default App;
