import React, { useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';

import EventEntry from './entry';
import Style from './style';

const length = 10;

const List = ({ list }) => {
    const [start, setStart] = useState(0);
    const cutList = list.slice(start, Math.min(start + length, list.length));

    return (
        <Container className='list'>
            {cutList.map((entry, key) => <EventEntry key={key} {...entry} />)}
        </Container>
    );
};

export default List;
