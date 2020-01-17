import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from 'Component/header';
import ValidateLogin from 'Component/validateLogin';
import { entryFetch, getEvent } from 'Store/action/event';
import { getParamInt } from 'Util/param';

const Event = props => {
    const id = getParamInt(props, 'id');
    const data = useSelector(getEvent);

    if (!data.id || data.id !== id) {
        const dispatch = useDispatch();
        dispatch(entryFetch(id));
    }

    // <ValidateLogin>
    return (
        <>
            <Header page='Events' />
            <div className='event'>
                <Link to='/eventlist'>back to list</Link>
                <br />
                showing event entry {id}
            </div>
        </>
    );
};

export default Event;
