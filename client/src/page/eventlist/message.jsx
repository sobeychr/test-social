import React from 'react';
import { Button } from 'react-bootstrap';

export const Loading = () => <p className='loading'>loading</p>;

export const LoadMore = ({ onClick }) => (
    <Button
        className='loadmore'
        variant='outline-primary'
        block
        size='lg'
        onClick={onClick}
    >
        Load more
    </Button>
);
