import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Modal from 'Component/modal';
import {
    hasError as hasErrorStore,
    isLoading as isLoadingApp,
} from 'Store/action/app';
import {
    isLoggedIn as isLoggedInStore,
    isLoading as isLoadingUser,
} from 'Store/action/user';

import LoginForm from './form';
import { AppError, AppLoading } from './message';
import Style from './style';

const Login = () => {
    const isLoggedIn = useSelector(isLoggedInStore);
    const isLoadApp = useSelector(isLoadingApp);
    const isLoadUser = useSelector(isLoadingUser);
    const isLoading = isLoadApp;
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
        <Modal className='login' show centered backdrop='static' title='Login'>
            {body}
        </Modal>
    );
};

export default Login;
