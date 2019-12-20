import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-jsonschema-form';
import { login, isLoggedIn } from 'Store/action/user';
import { schema, uiSchema } from './schema';

const Login = () => {
    const isLogged = useSelector(isLoggedIn);
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = e => {
        setLoading(true);

        const { formData } = e;
        dispatch(login(formData));
    };

    if(isLogged) {
        return <Redirect to='/profile' />;
    }

    return (
        <Modal show centered backdrop='static'>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    action='/'
                    autocomplete='off'
                    disabled={isLoading}
                    method='post'
                    onSubmit={onSubmit}
                    schema={schema}
                    uiSchema={uiSchema}
                >
                    <Button
                        block
                        disabled={isLoading}
                        type='submit'
                        variant='primary'
                    >
                        {isLoading ? 'loading...' : 'Login'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Login;
