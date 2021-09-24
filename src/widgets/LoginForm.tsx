import React from 'react';
import { Checkbox } from '@chakra-ui/react';
import { FormGroup } from '../components/FormGroup';
import { Input } from '../components/Input';

export const LoginForm: React.FC = () => (
    <form>
        <FormGroup title="User Pool Client">
            <Input placeholder="ID" />
            <Input placeholder="Secret" />
        </FormGroup>
        <FormGroup title="Login">
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Scope" />
        </FormGroup>
        <Checkbox>Save for later</Checkbox>
    </form>
);
