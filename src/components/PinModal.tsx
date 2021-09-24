import React, { useState } from 'react';
import {
    Box,
    HStack,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    PinInput,
    PinInputField,
} from '@chakra-ui/react';

interface PinModalProps {
    isOpen: boolean;
    onPinEntered: (pin: string) => Promise<void>;
    title: string;
    description: string;
}

export const PinModal: React.FC<PinModalProps> = (props) => {
    const [error, setError] = useState<string>();

    async function handlePinEntered(pin: string): Promise<void> {
        try {
            await props.onPinEntered(pin);
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={(): void => {
                /* noop */
            }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalBody pb="1.5rem">
                    <Box as="p" mb="1rem">
                        {props.description}
                    </Box>
                    <HStack align="center" justifyContent="center" display="flex">
                        <PinInput type="alphanumeric" mask onComplete={handlePinEntered} isInvalid={!!error}>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
