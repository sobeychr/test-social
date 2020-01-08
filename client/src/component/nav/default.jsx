import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import { Nav as BaseNav } from 'react-bootstrap';
import NavLink from './link';

const Link = props => <NavLink className='nav-link' {...props} />;

const NavDefault = ({ className, links, asItems }) => (
    <BaseNav className={className}>
        {links.map((entry, key) => (
            <Link key={key} {...entry} />
        ))}
    </BaseNav>
);

export default NavDefault;
