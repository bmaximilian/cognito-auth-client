import React from 'react';
import copy from 'copy-to-clipboard';
import { Flex, useToast } from '@chakra-ui/react';
import { List } from '../components/List';
import { Token, useAuthentication } from '../auth';

const TokenItem: React.FC<{ title: string; token: string; onClick?: () => void }> = (props) => (
    <List.Item flex={1} onClick={props.onClick}>
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
    const toast = useToast();

    if (!auth.hasTokens()) {
        return null;
    }

    const tokens = auth.getTokens();

    function handleTokenClick(token: Token): void {
        copy(token.jwt);
        toast({
            title: 'Copied to clipboard.',
            description: 'The token is copied to your clipboard.',
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
    }

    return (
        <List>
            <TokenItem
                title="ID Token"
                token={tokens.idToken.jwt}
                onClick={(): void => handleTokenClick(tokens.idToken)}
            />
            <TokenItem
                title="Access Token"
                token={tokens.accessToken.jwt}
                onClick={(): void => handleTokenClick(tokens.accessToken)}
            />
        </List>
    );
};
