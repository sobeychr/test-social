import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TagContainer } from 'Component/event';

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
                <Col sm='5'>
                    <img
                        alt={title}
                        className='thumbnail-img'
                        src={`/asset/event/${thumbnail}`}
                    />
                </Col>
                <Col className='title-container' sm='7'>
                    <h1 className='title-container-text text-success'>
                        {title}
                    </h1>
                    <TagContainer tags={tag} />
                </Col>
            </Row>
            <Row as='section' className='event-description' noGutters>
                <p>{description}</p>
            </Row>
        </>
    );
};

export default EventContent;
