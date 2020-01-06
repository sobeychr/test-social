import React from 'react';
import { Nav as BaseNav } from 'react-bootstrap';

const Link = ({ disabled = false, href = '#', title }) => (
    <BaseNav.Link href={href} disabled={disabled}>
        {title}
    </BaseNav.Link>
);

const Nav = ({ className, links, asItems }) => (
    <BaseNav className={className}>
        {links.map((entry, key) => (
            <Link key={key} {...entry} />
        ))}
    </BaseNav>
);

export default Nav;
