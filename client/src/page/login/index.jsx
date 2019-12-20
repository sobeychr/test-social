import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Login = () => {
    const onSubmit = () => console.log('submitting...');

    return (
        <Modal autoFocus show centered backdrop='static' onSubmit={onSubmit}>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formEmail'>
                        <Form.Control type='text' placeholder='username' />
                    </Form.Group>
                    <Form.Group controlId='formPassword'>
                        <Form.Control type='password' placeholder='password' />
                    </Form.Group>
                    <Button block variant='primary' type='submit'>Login</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Login;
