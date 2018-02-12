import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

const ConfirmModal = ({
    showModal,
    title,
    message,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel
}) => (
    <Modal bsSize="small" show={showModal}>
        <Modal.Body>
            <h4>
                <b>{title}</b>
            </h4>
            <p>{message}</p>
            <div className="btn-group">
                <Button onClick={onCancel}>{cancelLabel}</Button>
                <Button bsStyle="primary" onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </Modal.Body>
    </Modal>
)

ConfirmModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    confirmLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
}

ConfirmModal.defaultProps = {
    confirmLabel: 'OK',
    cancelLabel: 'Cancel',
    onConfirm: () => {},
    onCancel: () => {}
}

export default ConfirmModal
