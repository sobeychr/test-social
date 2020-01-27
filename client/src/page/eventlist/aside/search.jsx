import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import debounce from 'lodash/debounce';

const delay = 250;

const SearchEvent = ({setFilter}) => {
    const ref = useRef();

    const onDebounce = () => {
        const value = ref.current.value;
        setFilter(value);
    };

    const onChange = debounce(onDebounce, delay);

    return (
        <Form className='search-event'>
            <Form.Control
                className='mr-sm-2'
                ref={ref}
                onChange={onChange}
                placeholder='Search events'
                size='sm'
                type='text'
            />
        </Form>
    );
};

export default SearchEvent;
