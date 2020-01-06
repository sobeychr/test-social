import React from 'react';
import { Nav, NavDropdown as BaseNavDropdown } from 'react-bootstrap';

const NavDropDown = ({ className, links, title }) => (
    <Nav className={className}>
        <BaseNavDropdown title={title}>
            {links.map(({ href, title }, key) => (
                <BaseNavDropdown.Item key={key} href={href}>
                    {title}
                </BaseNavDropdown.Item>
            ))}
        </BaseNavDropdown>
    </Nav>
);

export default NavDropDown;
