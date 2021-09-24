import React, { useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { SubmitButton } from '../components/SubmitButton';
import { List } from '../components/List';

export interface SavedEntry {
    title: string;
}

interface SavedEntryListProps {
    items: SavedEntry[];
    onItemClick: (item: SavedEntry) => void;
    onAdd: () => void;
}

export const SavedEntryList: React.FC<SavedEntryListProps> = (props) => {
    useEffect(() => {
        if (!props.items.length && typeof props.onAdd === 'function') {
            props.onAdd();
        }
    }, [props.items.length, props.onAdd]);

    return (
        <List>
            {props.items.map((item) => (
                <List.Item key={item.title} onClick={(): void => props.onItemClick(item)}>
                    {item.title}
                </List.Item>
            ))}
            <SubmitButton onClick={props.onAdd}>
                <AddIcon />
                &ensp;Continue without saved data
            </SubmitButton>
        </List>
    );
};
