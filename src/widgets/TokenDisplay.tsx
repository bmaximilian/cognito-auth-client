import React from 'react';
import { Flex } from '@chakra-ui/react';
import { List } from '../components/List';
import { useAuthentication } from '../auth';

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

export const TokenDisplay: React.FC = () => {
    const auth = useAuthentication();

    if (!auth.hasTokens()) {
        return null;
    }

    const tokens = auth.getTokens();

    return (
        <List>
            <TokenItem title="ID Token" token={tokens.idToken.jwt} />
            <TokenItem title="Access Token" token={tokens.accessToken.jwt} />
        </List>
    );
};
