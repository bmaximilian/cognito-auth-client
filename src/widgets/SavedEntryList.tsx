import React from 'react';
import { Button, ButtonProps, Stack, StackProps } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { SubmitButton } from '../components/SubmitButton';

export interface SavedEntry {
    title: string;
}

const Card: React.FC<ButtonProps> = (props) => (
    <Button maxW="md" borderWidth="1px" borderRadius="lg" padding="1.5rem" variant="outline" {...props} />
);

const ListContainer: React.FC<StackProps> = (props) => <Stack spacing={3} {...props} />;

interface SavedEntryListProps {
    items: SavedEntry[];
    onItemClick: (item: SavedEntry) => void;
    onAdd: () => void;
}

export const SavedEntryList: React.FC<SavedEntryListProps> = (props) => (
    <ListContainer>
        {props.items.map((item) => (
            <Card key={item.title} onClick={(): void => props.onItemClick(item)}>
                {item.title}
            </Card>
        ))}
        <SubmitButton onClick={props.onAdd}>
            <AddIcon />
            &ensp;Continue without saved data
        </SubmitButton>
    </ListContainer>
);
