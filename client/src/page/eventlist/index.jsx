import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';
import {
    isLoadedList,
    isLoading as isLoadingStore,
    getList,
    listFetch,
} from 'Store/action/event';

import { CreateButton } from './create';
import List from './list';
import { Loading } from './message';

const EventList = () => {
    const isLoaded = useSelector(isLoadedList);
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
                <main>
                    <h1 className='main-title'>List</h1>
                    {isDisplay ? <List list={list} /> : <Loading />}
                </main>
            </div>
        </>
    );
};

export default EventList;
