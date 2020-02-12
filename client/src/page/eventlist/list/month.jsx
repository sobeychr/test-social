import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { monthToString } from 'Util/date';

import EventEntry from './entry';

const getDate = timestamp => {
    const d = new Date(timestamp * 1000);
    return monthToString(d.getUTCMonth(), true) + ' ' + d.getUTCFullYear();
};

const EventMonth = ({ filter, list, start }) => {
    const [isCollapse, setCollapse] = useState(false);
    const date = getDate(start);

    const onClick = () => {
        setCollapse(!isCollapse);
    };

    return (
        <Row as='section' className='month'>
            <Col className='month-label' sm='2'>
                <Button
                    as='span'
                    className='month-label-title'
                    variant='outline-light'
                    onClick={onClick}
                >
                    {date}
                    <br />
                    {list.length} events
                </Button>
            </Col>
            <Col className={`month-list ${isCollapse ? 'collapse' : ''}`}>
                {list.map((entry, key) => (
                    <EventEntry key={key} filter={filter} {...entry} />
                ))}
            </Col>
        </Row>
    );
};

export default EventMonth;
