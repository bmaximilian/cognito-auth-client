import React from 'react';
import { Flex } from '@chakra-ui/react';
import { List } from '../components/List';

interface TokenDisplayProps {
    accessToken: string;
    idToken: string;
}

const TokenItem: React.FC<{ title: string; token: string }> = (props) => (
    <List.Item flex={1}>
        <Flex justify="space-between" flex={1} flexWrap="wrap" align="start" direction="column">
            <span style={{ marginBottom: '0.5rem' }}>{props.title}:</span>
            <span style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap', textAlign: 'left', fontWeight: 'normal' }}>
                {props.token}
            </span>
        </Flex>
    </List.Item>
);

export const TokenDisplay: React.FC<TokenDisplayProps> = (props) => (
    <>
        <List>
            <TokenItem title="ID Token" token={props.idToken} />
            <TokenItem title="Access Token" token={props.accessToken} />
        </List>
    </>
);
