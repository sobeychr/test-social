import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Header from 'Component/header';
import withValidateLogin from 'Hoc/validateLogin';
import { entryFetch, getEvent, hasEventError } from 'Store/action/event';
import { getParamInt } from 'Util/param';

import EventContent from './content';
import { BackToList, Loading, NotFound } from './message';
import Style from './style';

const Event = props => {
    const id = getParamInt(props, 'id');
    const data = useSelector(getEvent);
    const hasError = useSelector(hasEventError);

    if (!data.id || data.id !== id) {
        const dispatch = useDispatch();
        dispatch(entryFetch(id));
        return <Loading />;
    }

    const body = hasError ? <NotFound /> : <EventContent {...data} />;

    return (
        <>
            <Header page='Events' />
            <div className='event'>
                <aside className='aside'>
                    <BackToList />
                </aside>
                <Container as='main'>{body}</Container>
            </div>
        </>
    );
};

export default withValidateLogin(Event);
