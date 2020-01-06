import React from 'react';
import { Nav, NavDropdown as BaseNavDropdown } from 'react-bootstrap';

const Divider = () => <BaseNavDropdown.Divider />;

const Item = ({ href, title }) => (
    <BaseNavDropdown.Item href={href}>{title}</BaseNavDropdown.Item>
);

const NavDropDown = ({ className, links, title }) => {
    return (
        <Nav className={className}>
            <BaseNavDropdown title={title}>
                {links.map(({ divider, href, title }, key) =>
                    divider ? (
                        <Divider key={key} />
                    ) : (
                        <Item key={key} href={href} title={title} />
                    ),
                )}
            </BaseNavDropdown>
        </Nav>
    );
};

export default NavDropDown;
