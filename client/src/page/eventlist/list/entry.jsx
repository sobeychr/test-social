import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/lib/md';
import withWindowSize from 'Hoc/windowSize';
import { monthToString } from 'Util/date';

const getDate = timestamp => {
    const d = new Date(timestamp * 1000);
    return monthToString(d.getUTCMonth(), true) + ' ' + d.getUTCDate();
};

const ReadMore = ({ isExpand, showExpand, ...props }) => (
    <Button
        className={`readmore ${showExpand ? 'show' : 'hide'}`}
        variant='info'
        {...props}
    >
        {isExpand ? <MdExpandLess /> : <MdExpandMore />}
    </Button>
);

const EventEntry = ({ id, title, short, windowDisplay, thumbnail, start }) => {
    const [isExpand, setIsExpand] = useState(false);
    const [showExpand, setShowExpand] = useState(false);
    const ref = useRef();

    const onClick = () => setIsExpand(!isExpand);

    useEffect(() => {
        const { clientHeight, scrollHeight } = ref.current;
        if (!isExpand && !isNaN(clientHeight) && !isNaN(scrollHeight)) {
            setShowExpand(clientHeight < scrollHeight);
        }
    }, [windowDisplay]);

    return (
        <Card className='event-entry'>
            <Card.Header className='header'>
                <Link
                    to={`/event/${id}`}
                    title={title}
                    className='title text-success'
                >
                    {title}
                </Link>
                <span className='date'>{getDate(start)}</span>
            </Card.Header>
            <Card.Body>
                <Card.Text
                    className={`description ${isExpand ? 'expand' : ''}`}
                    ref={ref}
                >
                    <img
                        alt={title}
                        className='thumbnail'
                        src={`./asset/event/${thumbnail}`}
                    />
                    {short}
                </Card.Text>

                <ReadMore
                    isExpand={isExpand}
                    showExpand={showExpand}
                    onClick={onClick}
                />
            </Card.Body>
        </Card>
    );
};

export default withWindowSize(EventEntry);
