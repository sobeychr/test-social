import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'Component/header';
import withValidateLogin from 'Hoc/validateLogin';
import {
    isLoadedList,
    isLoading as isLoadingStore,
    getList,
    listFetch,
} from 'Store/action/event';

import AsideList from './aside';
import List from './list';
import { Loading } from './message';

const EventList = () => {
    const [filter, setFilter] = useState('');
    const isLoaded = useSelector(isLoadedList);
    const isLoading = useSelector(isLoadingStore);
    const isDisplay = isLoaded && !isLoading;
    const list = useSelector(getList);

    if (!isLoaded && !isLoading) {
        const dispatch = useDispatch();
        dispatch(listFetch());
    }

    console.log('[filter]', filter);

    return (
        <>
            <Header page='Events' />
            <div className='eventlist'>
                <AsideList setFilter={setFilter} />
                <main>
                    {isDisplay ? <List filter={filter} list={list} /> : <Loading />}
                </main>
            </div>
        </>
    );
};

export default withValidateLogin(EventList);
