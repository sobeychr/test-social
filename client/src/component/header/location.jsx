import React from 'react';
import Nav from 'Component/nav';
import { appendObject } from 'Util/array';

const links = [
    { href: '/profile', title: 'Home' },
    { href: '/eventlist', title: 'Events' },
    { href: '/userlist', title: 'Users' },
];

const Location = ({ page }) => {
    const newLinks = appendObject(links, 'title', page, { disabled: true });
    return <Nav className='mr-auto location' links={newLinks} />;
};

export default Location;
