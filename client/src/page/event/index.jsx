import React from 'react';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';

const Event = () => (
    <ValidateLogin>
        <Header page='Events' />
    </ValidateLogin>
);

export default Event;
