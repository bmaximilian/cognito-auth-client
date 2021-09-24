import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { SafeProvider } from './safe';
import { CognitoAuthenticationProvider } from './auth';

test('renders the page heading', async () => {
    render(
        <ChakraProvider>
            <SafeProvider>
                <CognitoAuthenticationProvider>
                    <App />
                </CognitoAuthenticationProvider>
            </SafeProvider>
        </ChakraProvider>
    );

    await waitFor(() => {
        const heading = screen.getByText(/Cognito Auth Client/i);
        expect(heading).toBeInTheDocument();
    });
});
