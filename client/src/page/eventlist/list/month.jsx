import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { monthToString } from 'Util/date';

import EventEntry from './entry';

const getDate = timestamp => {
    const d = new Date(timestamp * 1000);
    return monthToString(d.getUTCMonth(), true) + ' ' + d.getUTCFullYear();
};

const EventMonth = ({ start, list }) => {
    const [isCollapse, setCollapse] = useState(false);

    const date = getDate(start);

    return (
        <Row className='month'>
            <Col className='month-label' sm={2}>
                <span>{date}</span>
            </Col>
            <Col>
                {list.map((entry, key) => (
                    <EventEntry key={key} {...entry} />
                ))}
            </Col>
        </Row>
    );
};

export default EventMonth;
