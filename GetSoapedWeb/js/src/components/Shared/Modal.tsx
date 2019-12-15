import * as React from "react";

import Button from 'react-bootstrap/Button';
import BootstrapModal from 'react-bootstrap/Modal'

interface ModalProps {
    id: string,
    children?: React.ReactNode,
    show?: boolean,
    title: string,
    onHide?: () => void
};

export const Modal = (props: ModalProps) => {
    return (
        <BootstrapModal
            size="lg"
            aria-labelledby={props.id}
            centered
            show={props.show}
            onHide={props.onHide}>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title id={props.id}>
                    {props.title}
                </BootstrapModal.Title>
            </BootstrapModal.Header>
            
            <BootstrapModal.Body>
                {props.children}
            </BootstrapModal.Body>

            <BootstrapModal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
};