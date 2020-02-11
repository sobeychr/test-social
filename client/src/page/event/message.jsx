import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

export const BackToList = () => (
    <Button
        as={Link}
        className='backtolist'
        to='/eventlist'
        size='sm'
        variant='primary'
    >
        <FaAngleLeft />
        Back to List
    </Button>
);

export const NotFound = () => (
    <p className='text-danger'>Error - event not found</p>
);
