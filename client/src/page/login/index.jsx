import React, { useState, useEffect } from 'react';
// import { useEffect, useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';

const loginRequest = () => new Promise(resolve => setTimeout(resolve, 2500));

const Login = () => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            loginRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const onSubmit = e => {
        e.preventDefault();
        console.log('submitting...');
        setLoading(true);
    };

    return (
        <Modal autoFocus show centered backdrop='static' onSubmit={onSubmit}>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formEmail'>
                        <Form.Control
                            disabled={isLoading}
                            placeholder='username'
                            type='text'
                        />
                    </Form.Group>
                    <Form.Group controlId='formPassword'>
                        <Form.Control
                            disabled={isLoading}
                            placeholder='password'
                            type='password'
                        />
                    </Form.Group>
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
