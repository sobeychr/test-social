import React from 'react';
import Header from 'Component/header';
import withValidateLogin from 'Hoc/validateLogin';

const User = () => (
    <Header page='Users' />
);

export default withValidateLogin(User);
