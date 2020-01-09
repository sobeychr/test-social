import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';
import {
    isLoaded as isLoadedStore,
    isLoading as isLoadingStore,
    getList,
    listFetch,
} from 'Store/action/event';

import { CreateButton } from './create';
import List from './list';
import { Loading } from './message';
import Style from './style';

const EventList = () => {
    const isLoaded = useSelector(isLoadedStore);
    const isLoading = useSelector(isLoadingStore);
    const isDisplay = isLoaded && !isLoading;
    const list = useSelector(getList);

    if (!isLoaded && !isLoading) {
        const dispatch = useDispatch();
        dispatch(listFetch);
    }

    // <ValidateLogin>
    return (
        <>
            <Header page='Events' />
            <div className='eventlist'>
                <aside className='aside'>
                    <CreateButton />
                </aside>
                <main className='main'>
                    <Container>
                        <h1>List</h1>
                        {isDisplay ? <List list={list} /> : <Loading />}
                    </Container>
                </main>
            </div>
        </>
    );
};

export default EventList;
