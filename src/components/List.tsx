import React from 'react';
import { Button, ButtonProps, Stack, StackProps } from '@chakra-ui/react';

const ListItem: React.FC<ButtonProps> = (props) => (
    <Button borderWidth="1px" borderRadius="lg" padding="1.5rem" variant="outline" {...props} />
);

const ListContainer: React.FC<StackProps> = (props) => <Stack spacing={3} {...props} />;

export const List = Object.assign(ListContainer, { Item: ListItem });
