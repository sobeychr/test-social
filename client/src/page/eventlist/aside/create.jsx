import React from 'react';
import { Button } from 'react-bootstrap';
import FaCalendarPlusO from 'react-icons/lib/fa/calendar-plus-o';

const CreateButton = () => (
    <Button className='create-button' size='sm' variant='primary'>
        <FaCalendarPlusO />
        <span>Create new event</span>
    </Button>
);

export default CreateButton;
