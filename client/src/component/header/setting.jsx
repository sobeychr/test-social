import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FaBarChart, FaBeer, FaBlind, FaCamera, FaTag, FaUserTimes } from 'react-icons/lib/fa';
import NavDropDown from 'Component/navDropDown';

const links = [
    { href: '#set0', preicon: <FaBarChart/>, title: 'Setting 0' },
    { href: '#set1', preicon: <FaBeer/>, title: 'Setting 1' },
    { href: '#set2', preicon: <FaBlind/>, title: 'Setting 2' },
    { href: '#set3', preicon: <FaCamera/>, title: 'Setting 3' },
    { divider: true },
    { href: '/logout', preicon: <FaUserTimes/>, title: 'Log out' },
    { href: '/about', preicon: <FaTag/>, title: 'About' },
];

const Setting = () => (
    <NavDropDown className='setting' title='' links={links} />
);

export default Setting;
