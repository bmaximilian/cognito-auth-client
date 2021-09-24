import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { ContentBox } from './ContentBox';

const Title: React.FC = (props) => (
    <Box mb="0.5rem" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated {...props} />
);

export const FormGroup: React.FC<{ title: JSX.Element | string }> = (props) => (
    <ContentBox>
        <Title>{props.title}</Title>
        <Stack spacing={3}>{props.children}</Stack>
    </ContentBox>
);
