import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
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
import List from './list';
import { Loading } from './message';


const LoadMore = ({onClick}) => <Button className='loadmore' variant='outline-primary' block size='lg' onClick={onClick}> Load more </Button>;

const EventList = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(isLoadedList);
    const isLoading = useSelector(isLoadingStore);
    const isDisplay = isLoaded && !isLoading;
    const [filter, setFilter] = useState('');
    const list = useSelector(getList);

    const onClick = () => {
        const lastEntry = last(list);
        const date = lastEntry.start + 1;
        dispatch(listFetch(date));
    };

    if (!isLoaded && !isLoading) {
        // dispatch(listFetch(now()));
        const date = Math.floor(new Date('2019-12-01').getTime() * .001);
        dispatch(listFetch(date));
    }

    return (
        <>
            <Header page='Events' />
            <div className='eventlist'>
                <AsideList setFilter={setFilter} />
                <main>
                    {isDisplay ? (
                        <>
                            <List filter={filter} list={list} />
                            <LoadMore onClick={onClick}/>
                        </>
                    ) : (
                        <Loading />
                    )}
                </main>
            </div>
        </>
    );
};

export default withValidateLogin(EventList);
