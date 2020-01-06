import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { isLoading as isLoadingStore, isLoggedIn } from 'Store/action/user';

const ValidateLogin = ({ children, page }) => {
    /*
    const isLoading = useSelector(isLoadingStore);
    const isLogged = useSelector(isLoggedIn);

    if (!isLoading && !isLogged) {
        return <Redirect to='/login' />;
    }
    */

    return <>{children}</>;
};

export default ValidateLogin;
