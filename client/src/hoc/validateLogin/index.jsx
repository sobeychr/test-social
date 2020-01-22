import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { isLoggedIn } from 'Store/action/user';

const withValidateLogin = Component => {
    return props => {
        const isLogged = useSelector(isLoggedIn);
        return isLogged
            ? <Component {...props} />
            : <Redirect to='/login' />;
    };
};

export default withValidateLogin;
