import React from 'react';
import Form from 'react-jsonschema-form';
import TransformError from 'Component/form/error';
import Modal from 'Component/modal';
import { schema, ui } from './schema';


const CreateForm = ({ onHide, show }) => {
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
            size='lg'
            title='Create new event'
        >
            <Form
                liveValidate
                onSubmit={onSubmit}
                transformErrors={TransformError}
                schema={schema}
                showErrorList={false}
                uiSchema={ui}
            />
        </Modal>
    );
};

export default CreateForm;
