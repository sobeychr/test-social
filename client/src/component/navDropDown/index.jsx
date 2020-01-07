import React from 'react';
import { Nav, NavDropdown as BaseNavDropdown } from 'react-bootstrap';
import { Link as BaseLink } from 'react-router-dom';

const Divider = () => <BaseNavDropdown.Divider />;

const Link = ({ href, preicon, posticon, title }) => {
    return (
        <BaseLink className='dropdown-item' to={href}>
            {preicon}
            {title && (<span>{title}</span>)}
            {posticon}
        </BaseLink>
    );
};

const NavDropDown = ({ className, links, title }) => {
    return (
        <Nav className={className}>
            <BaseNavDropdown title={title}>
                {links.map(({ divider, ...rest }, key) =>
                    divider ? (
                        <Divider key={key} />
                    ) : (
                        <Link key={key} {...rest} />
                    ),
                )}
            </BaseNavDropdown>
        </Nav>
    );
};

export default NavDropDown;
