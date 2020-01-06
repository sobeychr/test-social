import React from 'react';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';

const UserList = () => (
    <ValidateLogin>
        <Header page='Users' />
    </ValidateLogin>
);

export default UserList;
