import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const ContentBox: React.FC<BoxProps> = (props) => (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" padding="1.5rem" mb="1rem" {...props} />
);
