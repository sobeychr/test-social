import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { getUsername } from 'Store/action/user';

import Location from './location';
import Setting from './setting';
import Style from './style';

const Header = ({ page }) => {
    const username = useSelector(getUsername);

    return (
        <Navbar
            bg='dark'
            className='justify-content-between'
            variant='pills'
            sticky='top'
        >
            <Navbar.Brand>
                <i className='logo' />
                {username}
            </Navbar.Brand>
            <Location page={page} />
            <Setting />
        </Navbar>
    );
};

export default Header;