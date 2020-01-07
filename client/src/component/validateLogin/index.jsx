import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { isLoggedIn } from 'Store/action/user';

const ValidateLogin = ({ children, page }) => {
    const isLogged = useSelector(isLoggedIn);

    if (!isLogged) {
        return <Redirect to='/login' />;
    }

    return <>{children}</>;
};

export default ValidateLogin;
