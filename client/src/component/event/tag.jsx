import React from 'react';
import { Badge } from 'react-bootstrap';

const TagContainer = ({ tags }) => (
    <span className='tag'>
        {tags.map((entry, key) => (
            <TagEntry key={key} label={entry} />
        ))}
    </span>
);

// const TagEntry = ({label}) => <Button className='tag-entry' size='sm' variant='primary'>{label}</Button>
const TagEntry = ({ label }) => (
    <Badge className='tag-entry' size='sm' variant='primary'>
        {label}
    </Badge>
);

export { TagEntry, TagContainer };
