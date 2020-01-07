import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import { Nav as BaseNav } from 'react-bootstrap';
import NavLink from 'Component/navLink';

const Link = (props) => <NavLink className='nav-link' {...props}/>;

const Nav = ({ className, links, asItems }) => (
    <BaseNav className={className}>
        {links.map((entry, key) => (
            <Link key={key} {...entry} />
        ))}
    </BaseNav>
);

export default Nav;
