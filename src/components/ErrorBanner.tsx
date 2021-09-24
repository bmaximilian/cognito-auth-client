import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, Flex, Stack } from '@chakra-ui/react';

export const ErrorBanner: React.FC<{ title: JSX.Element | string; message: JSX.Element | string }> = (props) => (
    <Alert status="error" borderRadius="lg">
        <Stack spacing={2}>
            <Flex align="center">
                <Flex flex={1}>
                    <AlertIcon />
                    <AlertTitle mr={2}>{props.title}</AlertTitle>
                </Flex>
                <CloseButton />
            </Flex>
            <AlertDescription>{props.message}</AlertDescription>
        </Stack>
    </Alert>
);
