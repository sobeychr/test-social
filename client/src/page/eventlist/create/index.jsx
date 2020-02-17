import React from 'react';
import Modal from 'Component/modal';

const CreateForm = ({ onHide, show }) => (
    <Modal
        backdrop='static'
        closeButton
        onHide={onHide}
        show={show}
        size='lg'
        title='Create new event'
    >
        <p>new event content</p>
    </Modal>
);

export default CreateForm;
