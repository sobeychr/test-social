import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { isLoading as isLoadingApp } from 'Store/action/app';
import {
    isLoggedIn as isLoggedInStore,
    isLoading as isLoadingUser,
} from 'Store/action/user';

const Loading = () => (
    <h1 className='loading loading-app text-gray-dark'>loading credentials</h1>
);

const withValidateLogin = Component => {
    return props => {
        const isLoggedIn = useSelector(isLoggedInStore);
        const isLoadApp = useSelector(isLoadingApp);
        const isLoadUser = useSelector(isLoadingUser);
        const isLoading = isLoadApp || isLoadUser;

        return isLoading ? (
            <Loading />
        ) : isLoggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/login' />
        );
    };
};

export default withValidateLogin;
