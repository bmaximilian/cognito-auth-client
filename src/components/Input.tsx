import React from 'react';
import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

export const Input: React.FC<InputProps> = (props) => <ChakraInput focusBorderColor="teal.500" size="lg" {...props} />;
