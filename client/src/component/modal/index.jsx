import React from 'react';
import { Modal as BaseModal } from 'react-bootstrap';

const Modal = ({ title, children, ...rest }) => (
    <BaseModal {...rest}>
        <BaseModal.Header>
            <BaseModal.Title>{title}</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>{children}</BaseModal.Body>
    </BaseModal>
);

export default Modal;
