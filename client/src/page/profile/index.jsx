import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { isLoggedIn } from 'Store/action/user';

const Profile = () => {
    const isLogged = useSelector(isLoggedIn);

    if (!isLogged) {
        return <Redirect to='/login' />;
    }

    return <h1>Profile</h1>;
};

export default Profile;
