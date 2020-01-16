import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/lib/md';
import pick from 'lodash/pick';
import withWindowSize from 'Component/windowSize';
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

const EventEntry = ({
    id,
    title,
    description,
    windowDisplay,
    thumbnail,
    start,
}) => {
    const [isExpand, setIsExpand] = useState(false);
    const [showExpand, setShowExpand] = useState(false);
    const ref = useRef();

    const onClick = () => setIsExpand(!isExpand);

    useEffect(() => {
        const { clientHeight, scrollHeight } = pick(ref.current, [
            'clientHeight',
            'scrollHeight',
        ]);
        if (!isExpand && !isNaN(clientHeight) && !isNaN(scrollHeight)) {
            setShowExpand(clientHeight < scrollHeight);
        }
    }, [windowDisplay]);

    return (
        <Card className='event-entry'>
            <Card.Header className='header'>
                <span title={title} className='title text-success'>
                    {`${id} ${title}`}
                </span>
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
                    {description}
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
