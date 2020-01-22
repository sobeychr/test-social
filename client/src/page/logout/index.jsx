import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'Component/modal';
import { loginRemove } from 'Store/action/user';

import Style from './style';

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(loginRemove());

    return (
        <Modal show centered backdrop='static' title='Logged out'>
            <p>
                You have logged out.
                <Link className='login' to='login'>
                    Click here
                </Link>
                to log back in.
            </p>
        </Modal>
    );
};

export default Logout;
