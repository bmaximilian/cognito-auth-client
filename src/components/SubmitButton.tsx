import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

export const SubmitButton: React.FC<ButtonProps> = (props) => (
    <Button borderWidth="1px" borderRadius="lg" padding="1.5rem" variant="solid" colorScheme="teal" {...props} />
);
