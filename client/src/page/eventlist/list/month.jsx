import React, { useState } from 'react';
import { Button, Col, Collapse, Row } from 'react-bootstrap';
import { monthToString } from 'Util/date';

import EventEntry from './entry';

const getDate = timestamp => {
    const d = new Date(timestamp * 1000);
    return monthToString(d.getUTCMonth(), true) + ' ' + d.getUTCFullYear();
};

const EventMonth = ({ filter, list, start }) => {
    const [isExpand, setExpand] = useState(true);
    const date = getDate(start);

    const onClick = () => {
        setExpand(!isExpand);
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
            <Collapse in={isExpand} timeout='200'>
                <Col className='month-list'>
                    {list.map((entry, key) => (
                        <EventEntry key={key} filter={filter} {...entry} />
                    ))}
                </Col>
            </Collapse>
        </Row>
    );
};

export default EventMonth;
