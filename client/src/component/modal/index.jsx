import React from 'react';
import { Modal as BaseModal } from 'react-bootstrap';

const Modal = ({ backdrop = 'static', centered, show, title, children }) => (
    <BaseModal backdrop={backdrop} centered={centered} show={show}>
        <BaseModal.Header>
            <BaseModal.Title>{title}</BaseModal.Title>
        </BaseModal.Header>
        <BaseModal.Body>{children}</BaseModal.Body>
    </BaseModal>
);

export default Modal;
