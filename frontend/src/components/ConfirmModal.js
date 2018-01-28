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
			<h4>{title}</h4>
			<p>{message}</p>
			<div>
				<Button onClick={onCancel}>{cancelLabel}</Button>
				<Button bsStyle="primary" onClick={onConfirm}>
					{confirmLabel}
				</Button>
			</div>
		</Modal.Body>
	</Modal>
)

ConfirmModal.propTypes = {}

ConfirmModal.defaultProps = {
	confirmLabel: 'OK',
	cancelLabel: 'Cancel'
}

export default ConfirmModal
