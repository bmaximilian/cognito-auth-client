import React from 'react';
import { BoxProps, Text } from '@chakra-ui/react';
import { ContentBox } from './ContentBox';

export const DescriptionBox: React.FC<BoxProps> = ({ children, ...props }) => (
    <ContentBox borderWidth={0} paddingY="0.5rem" paddingX="0.5rem" {...props}>
        <Text fontSize="md">{children}</Text>
    </ContentBox>
);
