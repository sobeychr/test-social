import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import last from 'lodash/last';
import Header from 'Component/header';
import withValidateLogin from 'Hoc/validateLogin';
import {
    isLoadedList,
    isLoading as isLoadingStore,
    getList,
    listFetch,
} from 'Store/action/event';
import { now } from 'Util/date';

import AsideList from './aside';
import CreateForm from './create';
import List from './list';
import { Loading, LoadMore } from './message';

const EventList = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(isLoadedList);
    const isLoading = useSelector(isLoadingStore);
    const isDisplay = isLoaded && !isLoading;
    const [filter, setFilter] = useState('');
    const list = useSelector(getList);
    const [showForm, setShowForm] = useState(false);

    const onShowForm = () => {
        setShowForm(!showForm);
    };

    const onLoadMore = () => {
        const lastEntry = last(list);
        const date = lastEntry.start + 1;
        dispatch(listFetch(date));
    };

    if (!isLoaded && !isLoading) {
        // dispatch(listFetch(now()));
        const date = Math.floor(new Date('2019-12-01').getTime() * 0.001);
        dispatch(listFetch(date));
    }

    return (
        <>
            <Header page='Events' />
            <CreateForm onHide={onShowForm} show={showForm} />
            <div className='eventlist'>
                <AsideList onFilter={setFilter} onShowForm={onShowForm} />
                <Container as='main'>
                    {isDisplay ? (
                        <>
                            <List filter={filter} list={list} />
                            <LoadMore onClick={onLoadMore} />
                        </>
                    ) : (
                        <Loading />
                    )}
                </Container>
            </div>
        </>
    );
};

export default withValidateLogin(EventList);
