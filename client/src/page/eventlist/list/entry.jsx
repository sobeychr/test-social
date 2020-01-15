import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/lib/md';
import { tsToDate } from 'Util/date';

const EventEntry = ({ id, title, description, thumbnail, start }) => (
    <Card className='event-entry'>
        <Card.Header className='header'>
            <span title={title} className='title text-success'>
                {title}
            </span>
            <span className='date'>{tsToDate(start * 1000)}</span>
        </Card.Header>

        <Card.Body>
            <Card.Text className='description'>
                <img
                    alt={title}
                    className='thumbnail'
                    src={`./asset/event/${thumbnail}`}
                />
                {description}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default EventEntry;
