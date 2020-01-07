import React from 'react';
import { Link as BaseLink } from 'react-router-dom';

const NavLink = ({ className, disabled, href, preicon, posticon, title }) => (
    <BaseLink className={`${className} ${disabled ? 'disabled' : ''}`} to={href}>
        {preicon}
        {title && (<span>{title}</span>)}
        {posticon}
    </BaseLink>
);

export default NavLink;
