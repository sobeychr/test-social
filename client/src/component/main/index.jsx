import React from 'react';
import { Form, Modal } from 'react-bootstrap';

const Main = () => (
    <Modal autoFocus show centered backdrop='static'>
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
            </Form>
        </Modal.Body>
    </Modal>
);

export default Main;
