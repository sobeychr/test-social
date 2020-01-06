import React from 'react';
import { Nav, NavDropdown as BaseNavDropdown } from 'react-bootstrap';
import { Link as BaseLink } from 'react-router-dom';

const Divider = () => <BaseNavDropdown.Divider />;

const Link = ({ href, title }) => (
    <BaseLink className='dropdown-item' to={href}>
        {title}
    </BaseLink>
);

const NavDropDown = ({ className, links, title }) => {
    return (
        <Nav className={className}>
            <BaseNavDropdown title={title}>
                {links.map(({ divider, href, title }, key) =>
                    divider ? (
                        <Divider key={key} />
                    ) : (
                        <Link key={key} href={href} title={title} />
                    ),
                )}
            </BaseNavDropdown>
        </Nav>
    );
};

export default NavDropDown;
