import React from 'react';
import { Button } from 'react-bootstrap';
import FaCalendarPlusO from 'react-icons/lib/fa/calendar-plus-o';

const CreateButton = ({ onShowForm }) => (
    <Button
        className='create-button'
        size='sm'
        variant='primary'
        onClick={onShowForm}
    >
        <FaCalendarPlusO />
        <span>Create new event</span>
    </Button>
);

export default CreateButton;
