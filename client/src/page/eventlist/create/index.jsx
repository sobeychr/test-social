import React from 'react';
import Form from 'react-jsonschema-form';
import Modal from 'Component/modal';
import {error, schema, ui} from './schema';

const CreateForm = ({ onHide, show }) => {
    const onChange = e => {
        // console.log('onChange', e);
    };

    const onError = e => {
        // console.log('onError', e);
    };

    const onSubmit = e => {
        // console.log('onSubmit', e);
    };

    return (
        <Modal
            backdrop='static'
            closeButton
            keyboard={false}
            onHide={onHide}
            show={show}
            size='xl'
            title='Create new event'
        >
            <Form
                onChange={onChange}
                onError={onError}
                onSubmit={onSubmit}
                schema={schema}
                uiSchema={ui}
            />
        </Modal>
    );
};

export default CreateForm;
