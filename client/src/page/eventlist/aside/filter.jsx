import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import FaFilter from 'react-icons/lib/fa/filter';
import debounce from 'lodash/debounce';

const delay = 500;

const FilterEvent = ({ setFilter }) => {
    const ref = useRef();

    const onDebounce = () => {
        const value = ref.current.value;
        setFilter(value);
    };

    const onChange = debounce(onDebounce, delay);

    const onClick = () => {
        ref.current.focus();
    };

    return (
        <Form className='search-event'>
            <InputGroup>
                <InputGroup.Prepend>
                    <Button onClick={onClick}>
                        <FaFilter />
                    </Button>
                </InputGroup.Prepend>
                <Form.Control
                    className='sm-2 search-event-input'
                    ref={ref}
                    onChange={onChange}
                    placeholder='Filter events'
                    size='sm'
                    type='text'
                />
            </InputGroup>
        </Form>
    );
};

export default FilterEvent;
