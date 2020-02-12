import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TagEntry } from 'Component/event';

const EventContent = props => {
    const {
        created,
        description,
        end,
        start,
        tag,
        thumbnail,
        title,
        type,
    } = props;

    return (
        <>
            <Row as='section' className='event-title'>
                <div className='thumbnail-container'>
                    <img
                        alt={title}
                        className='thumbnail-img'
                        src={`/asset/event/${thumbnail}`}
                    />
                </div>
                <div className='title-container'>
                    <h1 className='title-container-text text-success'>
                        {title}
                    </h1>
                    <span className='tag'>
                        {tag.map((entry, key) => (
                            <TagEntry key={key} label={entry} />
                        ))}
                    </span>
                </div>
            </Row>
            <Row as='section' className='event-description'>
                <p>{description}</p>
            </Row>
        </>
    );
};

export default EventContent;
