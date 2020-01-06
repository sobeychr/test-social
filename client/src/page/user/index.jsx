import React from 'react';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';

const User = () => (
    <ValidateLogin>
        <Header page='Users' />
    </ValidateLogin>
);

export default User;
