import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import EventMonth from './month';
import { splitByMonth } from './helper';
import Style from './style';

const length = 10;

const List = ({ list }) => {
    const [start, setStart] = useState(0);
    const cutList = list.slice(start, Math.min(start + length, list.length));
    const split = splitByMonth(cutList);

    return (
        <Container className='list'>
            {split.map((entry, key) => (
                <EventMonth key={key} {...entry} />
            ))}
        </Container>
    );
};

export default List;
