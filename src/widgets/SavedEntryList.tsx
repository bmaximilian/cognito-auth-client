import React, { useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { SlideFade } from '@chakra-ui/react';
import { SubmitButton } from '../components/SubmitButton';
import { List } from '../components/List';
import { DescriptionBox } from '../components/DescriptionBox';

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
        <SlideFade in offsetY="2rem">
            <DescriptionBox>
                Click on <strong>Continue without saved data</strong> to create a new login credential data set.
                <br />
                It is possible to store these datasets encrypted and protected with a pin directly in your client.
                Stored datasets appear in this list. The stored data can be loaded by simply clicking on an entry and
                entering the pin which has been set when storing the data.
            </DescriptionBox>
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
        </SlideFade>
    );
};
