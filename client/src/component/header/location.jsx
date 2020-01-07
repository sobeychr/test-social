import React from 'react';
import { FaCalendar, FaHome } from 'react-icons/lib/fa';
import MdContacts from 'react-icons/lib/md/contacts';
import { NavDefault } from 'Component/nav';
import { appendObject } from 'Util/array';

const links = [
    { href: '/profile', preicon: <FaHome/>, title: 'Home' },
    { href: '/eventlist', preicon: <FaCalendar/>, title: 'Events' },
    { href: '/userlist', preicon: <MdContacts/>, title: 'Users' },
];

const Location = ({ page }) => {
    const newLinks = appendObject(links, 'title', page, { disabled: true });
    return <NavDefault className='mr-auto location' links={newLinks} />;
};

export default Location;
