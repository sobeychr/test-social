import React from 'react';
import Header from 'Component/header';
import withValidateLogin from 'Hoc/validateLogin';

const UserList = () => <Header page='Users' />;

export default withValidateLogin(UserList);
