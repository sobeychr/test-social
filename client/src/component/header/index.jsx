import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { getUsername } from 'Store/action/user';

import Location from './location';
import Setting from './setting';
import Style from './styles';

const Header = ({ page }) => {
    const username = useSelector(getUsername);

    return (
        <Navbar
            className='justify-content-between'
            expand='lg'
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
