import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isLoggedIn, getUsername } from 'Store/action/user';

import Location from './location';
import Setting from './setting';
import Style from './style';

const LoggedInMenu = ({page}) => (
    <React.Fragment>
        <Location page={page} />
        <Setting />
    </React.Fragment>
);

const LoggedInUser = ({username}) => (
    <React.Fragment>
        <i className='logo' />
        {username}
    </React.Fragment>
);

const LoggedOutUser = () => (
    <Link to='/login'>
        <i className='logo' />
    </Link>
);

const Header = ({ page }) => {
    const isLogged = useSelector(isLoggedIn);
    const username = useSelector(getUsername);

    return (
        <header id='header'>
            <Navbar
                bg='dark'
                className='justify-content-between'
                variant='pills'
                sticky='top'
            >
                <Navbar.Brand>
                    {isLogged
                        ? <LoggedInUser username={username}/>
                        : <LoggedOutUser/>
                    }
                </Navbar.Brand>
                {isLogged && <LoggedInMenu page={page}/>}
            </Navbar>
        </header>
    );
};

export default Header;
