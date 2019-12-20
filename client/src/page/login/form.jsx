import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import { schema, uiSchema } from './schema';

const LoginForm = ({ secret, onSubmit, isProcessing, setProcessing }) => (
    <Form
        action='/'
        autocomplete='off'
        disabled={isProcessing}
        method='post'
        onSubmit={onSubmit}
        schema={schema}
        formData={{
            secret,
        }}
        uiSchema={uiSchema}
    >
        <Button block disabled={isProcessing} type='submit' variant='info'>
            {isProcessing ? 'processing...' : 'Login'}
        </Button>
    </Form>
);

export default LoginForm;
