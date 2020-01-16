import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { MdExpandLess, MdExpandMore } from 'react-icons/lib/md';
import pick from 'lodash/pick';
import { monthToString } from 'Util/date';

const resizeDelay = 75;

const getDate = timestamp => {
    const d = new Date(timestamp * 1000);
    return monthToString(d.getUTCMonth(), true) + ' ' + d.getUTCDate();
};

const ReadMore = ({isExpand, showExpand, ...props}) => (<Button className={`readmore ${showExpand ? 'show' : 'hide'}`} variant='info' {...props}>
    {isExpand ? <MdExpandLess /> : <MdExpandMore />}
</Button>);

const EventEntry = ({ id, title, description, thumbnail, start }) => {
    const [isExpand, setExpand] = useState(false);
    const [showExpand, setShowExpand] = useState(false);
    const ref = useRef();

    const onClick = () => setExpand(!isExpand);

    useEffect(() => {
        let timer = 0;
        const onResize = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const { clientHeight, scrollHeight } = pick(ref.current, [
                    'clientHeight',
                    'scrollHeight',
                ]);

                if(!isExpand && !isNaN(clientHeight) && !isNaN(scrollHeight)) {
                    setShowExpand(clientHeight < scrollHeight)
                }
            }, resizeDelay);
        };

        window.addEventListener('resize', onResize);
        window.dispatchEvent(new Event('resize'));
        return () => window.removeEventListener('resize', onResize);
    });

    return (
        <Card className='event-entry'>
            <Card.Header className='header'>
                <span title={title} className='title text-success'>
                    {`${id} ${title}`}
                </span>
                <span className='date'>{getDate(start)}</span>
            </Card.Header>

            <Card.Body>
                <Card.Text className={`description ${isExpand ? 'expand' : ''}`} ref={ref}>
                    <img
                        alt={title}
                        className='thumbnail'
                        src={`./asset/event/${thumbnail}`}
                    />
                    {description}
                    <ReadMore isExpand={isExpand} showExpand={showExpand} onClick={onClick} />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default EventEntry;
