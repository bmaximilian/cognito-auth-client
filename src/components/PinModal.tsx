import React from 'react';
import {
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
    onPinEntered: (pin: string) => void;
}

export const PinModal: React.FC<PinModalProps> = (props) => (
    <Modal
        isOpen={props.isOpen}
        onClose={(): void => {
            /* noop */
        }}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Enter security pin</ModalHeader>
            <ModalBody>
                <HStack>
                    <PinInput type="alphanumeric" mask onComplete={props.onPinEntered}>
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
