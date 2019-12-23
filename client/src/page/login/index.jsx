import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Modal } from 'react-bootstrap';

import {
    hasError as hasErrorStore,
    isLoading as isLoadingStore,
} from 'Store/action/app';
import { isLoggedIn as isLoggedInStore } from 'Store/action/user';

import LoginForm from './form';
import { AppError, AppLoading } from './message';

const Login = () => {
    const isLoggedIn = useSelector(isLoggedInStore);
    const isLoading = useSelector(isLoadingStore);
    const hasError = useSelector(hasErrorStore);

    if (isLoggedIn) {
        return <Redirect to='/profile' />;
    }

    let body;
    if (hasError) {
        body = <AppError />;
    } else if (isLoading) {
        body = <AppLoading />;
    } else {
        body = <LoginForm />;
    }

    return (
        <Modal show centered backdrop='static'>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
        </Modal>
    );
};

export default Login;
