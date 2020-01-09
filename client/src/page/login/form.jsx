import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import { secretGet } from 'Store/action/app';
import {
    hasError as hasErrorStore,
    isLoading as isLoadingStore,
    loginFetch,
} from 'Store/action/user';

import { LoginError } from './message';
import { schema, uiSchema } from './schema';

const Loading = () => <p className='loading text-center'>loading</p>;

const Submit = () => (
    <Button block type='submit' variant='info'>
        Login
    </Button>
);

const LoginForm = () => {
    const isLoading = useSelector(isLoadingStore);
    const hasErrorUser = useSelector(hasErrorStore);
    const secret = useSelector(secretGet);
    const dispatch = useDispatch();

    const onSubmit = e => dispatch(loginFetch(e.formData));

    return (
        <>
            {hasErrorUser && <LoginError />}
            <Form
                action='/'
                autocomplete='off'
                disabled={isLoading}
                method='post'
                onSubmit={onSubmit}
                schema={schema}
                formData={{
                    secret,
                }}
                uiSchema={uiSchema}
            >
                {isLoading ? <Loading /> : <Submit />}
            </Form>
        </>
    );
};

export default LoginForm;
