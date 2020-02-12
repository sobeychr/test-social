import React from 'react';
import { Badge } from 'react-bootstrap';

// const TagEntry = ({label}) => <Button className='tag-entry' size='sm' variant='primary'>{label}</Button>
const TagEntry = ({ label }) => (
    <Badge className='tag-entry' size='sm' variant='primary'>
        {label}
    </Badge>
);

export default TagEntry;
