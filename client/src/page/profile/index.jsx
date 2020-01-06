import React from 'react';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';

const Profile = () => (
    <ValidateLogin>
        <Header page='Home' />
    </ValidateLogin>
);

export default Profile;
