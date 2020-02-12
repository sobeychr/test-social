import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { listFetch } from 'Store/action/event';

import EventMonth from './month';
import { splitByMonth } from './helper';
import Style from './style';

const List = ({ filter, list }) => {
    const split = splitByMonth(list);

    return (
        <div className='list'>
            {split.map((entry, key) => (
                <EventMonth key={key} filter={filter} {...entry} />
            ))}
        </div>
    );
};

export default List;
