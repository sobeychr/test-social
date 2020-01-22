import React from 'react';

const EventContent = (props) => {
    const { id } = props;

    return (
        <p>showing event entry {id}</p>
    );
};

export default EventContent;
