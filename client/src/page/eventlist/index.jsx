import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FaCalendarPlusO from 'react-icons/lib/fa/calendar-plus-o';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';
import { getList } from 'Store/action/event';

import Style from './style';

const EventList = () => {
    // const list = useSelector(getList);

    // <ValidateLogin>
    return (
        <>
            <Header page='Events' />
            <div className='eventlist'>
                <aside className='aside'>
                    <Button className='create-button' size='sm' variant='primary'>
                        <FaCalendarPlusO />
                        Create new event
                    </Button>
                </aside>
                <main className='main'>
                    <h1>List</h1>
                    <Container>
                        <Col>
                            <Row>
                            </Row>
                        </Col>
                    </Container>
                </main>
            </div>
        </>
    );
};

export default EventList;
