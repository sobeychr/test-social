import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import NavDropDown from 'Component/navDropDown';

const links = [
    { href: '#set0', title: 'Setting 0' },
    { href: '#set1', title: 'Setting 1' },
    { href: '#set2', title: 'Setting 2' },
    { href: '#set3', title: 'Setting 3' },
];

const Setting = () => (
    <NavDropDown className='setting' title='Settings' links={links} />
);

export default Setting;
