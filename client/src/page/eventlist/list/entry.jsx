import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Card } from 'react-bootstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/lib/md';
import { TagEntry } from 'Component/event';
import { monthToString } from 'Util/date';

const getDate = timestamp => {
    const d = new Date(timestamp * 1000);
    return monthToString(d.getUTCMonth(), true) + ' ' + d.getUTCDate();
};

const EventEntry = ({ id, title, short, filter, tag, thumbnail, start }) => {
    const [isExpand, setIsExpand] = useState(false);
    const isFiltered = !title.includes(filter) && !short.includes(filter);

    return (
        <Card
            as='article'
            className={`event-entry ${isFiltered ? 'filter' : ''}`}
        >
            <Card.Header className='header'>
                <Link to={`/event/${id}`} className='title text-success'>
                    {title}
                </Link>
                <span className='date'>{getDate(start)}</span>
            </Card.Header>
            <Card.Body className='body'>
                <Card.Text className='description'>
                    <img
                        alt={title}
                        className='thumbnail'
                        src={`/asset/event/${thumbnail}`}
                    />
                    <span className='tag'>
                        {tag.map((entry, key) => (
                            <TagEntry key={key} label={entry} />
                        ))}
                    </span>
                    <span className='description-text'>{short}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default EventEntry;
