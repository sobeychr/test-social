import React from 'react';
import { Nav, NavDropdown as BaseNavDropdown } from 'react-bootstrap';
import NavLink from './link';

const Divider = () => <BaseNavDropdown.Divider />;

const Link = props => <NavLink className='dropdown-item' {...props} />;

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
