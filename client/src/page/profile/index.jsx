import React from 'react';
import Header from 'Component/header';
import withValidateLogin from 'Hoc/validateLogin';

const Profile = () => <Header page='Home' />;

export default withValidateLogin(Profile);
