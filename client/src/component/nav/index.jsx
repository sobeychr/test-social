import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import { Nav as BaseNav } from 'react-bootstrap';

const Link = ({ disabled = false, href = '#', title }) => (
    <BaseLink className={`nav-link ${disabled && 'disabled'}`} to={href}>
        {title}
    </BaseLink>
);

const Nav = ({ className, links, asItems }) => (
    <BaseNav className={className}>
        {links.map((entry, key) => (
            <Link key={key} {...entry} />
        ))}
    </BaseNav>
);

export default Nav;
