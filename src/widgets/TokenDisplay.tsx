import React from 'react';
import copy from 'copy-to-clipboard';
import { Flex, SlideFade, useToast } from '@chakra-ui/react';
import { List } from '../components/List';
import { Token, useAuthentication } from '../auth';
import { DescriptionBox } from '../components/DescriptionBox';

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
        <SlideFade in offsetY="2rem">
            <DescriptionBox>
                The tokens from the successful login are displayed here.
                <br />
                A token can be copied to clipboard by clicking on it.
                <br />
                <br />
                There are 2 types of tokens: <br />
                The <strong>idToken</strong> contains the information to validate the token (like expiry date, issuer,
                etc.). But this token also contains custom claims, which might be permissions, scopes and others that
                are needed to provide deeper user information for the underlying services the user authenticates
                against.
                <br />
                The <strong>accessToken</strong> contains only the relevant information to validate the token. Custom
                claims are not included here.
            </DescriptionBox>
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
        </SlideFade>
    );
};
