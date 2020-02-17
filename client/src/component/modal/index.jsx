import React from 'react';
import { Modal as BaseModal } from 'react-bootstrap';

const Modal = ({ title, children, closeButton, ...rest }) => (
    <BaseModal {...rest}>
        <BaseModal.Header closeButton={closeButton}>
            <BaseModal.Title>{title}</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>{children}</BaseModal.Body>
    </BaseModal>
);

export default Modal;
