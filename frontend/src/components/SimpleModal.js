import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const SimpleModal = ({
    showModal,
    children,
    title,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel
}) => (
    <div>
        <Modal show={showModal} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <b>{title}</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button onClick={onCancel}>{cancelLabel}</Button>
                <Button onClick={onConfirm} bsStyle="primary">
                    {confirmLabel}
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
)

SimpleModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    confirmLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
}

SimpleModal.defaultProps = {
    confirmLabel: 'OK',
    cancelLabel: 'Cancel',
    onConfirm: () => {},
    onCancel: () => {}
}
export default SimpleModal
