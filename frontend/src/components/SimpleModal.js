import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const SimpleModal = ({ 
	showModal,
	children, 
	modalTitle, 
	txtBtnOk, 
	txtBtnCancel, 
	handleBtnOk,
	handleBtnCancel
}) => (
	<div>
		<Modal show={showModal}>
			<Modal.Header closeButton>
				<Modal.Title>{modalTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<Button onClick={handleBtnCancel}>{txtBtnCancel}</Button>
				<Button onClick={handleBtnOk} bsStyle="primary">{txtBtnOk}</Button>
			</Modal.Footer>
		</Modal>
	</div>
)

SimpleModal.propTypes = {
	showModal: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	modalTitle: PropTypes.string.isRequired,
	txtBtnOk: PropTypes.string,
	txtBtnCancel: PropTypes.string,
	handleBtnOk: PropTypes.func,
	handleBtnCancel: PropTypes.func
}

SimpleModal.defaultProps = {
	txtBtnOk: 'OK',
	txtBtnCancel: 'Cancel',
	handleBtnOk: () => {},
	handleBtnCancel: () => {}
}
export default SimpleModal