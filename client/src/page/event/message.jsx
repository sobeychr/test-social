import React from 'react';
import { Button } from 'react-bootstrap';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

export const BackToList = () => (
    <Button className='backtolist' href='/eventlist' size='sm' variant='primary'>
        <FaAngleLeft />
        Back to List
    </Button>
);

export const NotFound = () => (
    <p className='text-danger'>Error - event not found</p>
);
