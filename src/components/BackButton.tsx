import React from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, ButtonProps } from '@chakra-ui/react';

export const BackButton: React.FC<ButtonProps> = (props) => (
    <Button variant="ghost" mb="0.5rem" {...props}>
        <ChevronLeftIcon /> Back
    </Button>
);
