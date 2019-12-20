import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Modal } from 'react-bootstrap';

import { isLoading as isLoadingStore, secretGet } from 'Store/action/app';
import { loginFetch, isLoggedIn as isLoggedInStore } from 'Store/action/user';

import LoginForm from './form';

const Login = () => {
    const isLoggedIn = useSelector(isLoggedInStore);
    const isLoading = useSelector(isLoadingStore);
    const secret = useSelector(secretGet);
    const [isProcessing, setProcessing] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = e => {
        setProcessing(true);

        const { formData } = e;
        dispatch(loginFetch(formData));
    };

    if (isLoggedIn) {
        return <Redirect to='/profile' />;
    }

    return (
        <Modal show centered backdrop='static'>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isLoading ? (
                    <p>
                        <i>initializing</i>
                    </p>
                ) : (
                    <LoginForm
                        secret={secret}
                        onSubmit={onSubmit}
                        isProcessing={isProcessing}
                        setProcessing={setProcessing}
                    />
                )}
            </Modal.Body>
        </Modal>
    );
};

export default Login;
