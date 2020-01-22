import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';
import { entryFetch, getEvent, hasEventError } from 'Store/action/event';
import { getParamInt } from 'Util/param';

import EventContent from './content';
import { BackToList, NotFound } from './message';

const Event = props => {
    const id = getParamInt(props, 'id');
    const data = useSelector(getEvent);
    const hasError = useSelector(hasEventError);

    if (!data.id || data.id !== id) {
        const dispatch = useDispatch();
        dispatch(entryFetch(id));
    }

    const body = hasError
        ? <NotFound />
        : <EventContent {...data} />;

    // <ValidateLogin>
    return (
        <>
            <Header page='Events' />
            <div className='event'>
                <aside className='aside'>
                    <BackToList />
                </aside>
                <main>
                    {body}
                </main>
            </div>
        </>
    );
};

export default Event;
