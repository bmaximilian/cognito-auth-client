import React from 'react';
import { Divider, Flex, Tag, TagLabel } from '@chakra-ui/react';
import { ContentBox } from './ContentBox';

export const Steps: React.FC<{ steps: number; currentStep: number }> = (props) => (
    <ContentBox borderWidth="0">
        <Flex align="center">
            {new Array(props.steps).fill(0).map((_, index) => (
                <React.Fragment key={index}>
                    <Tag
                        size="lg"
                        borderRadius="full"
                        variant="solid"
                        colorScheme={index + 1 === props.currentStep ? 'teal' : undefined}
                    >
                        <TagLabel>{index + 1}</TagLabel>
                    </Tag>
                    {index !== props.steps - 1 && <Divider marginX="2" />}
                </React.Fragment>
            ))}
        </Flex>
    </ContentBox>
);
