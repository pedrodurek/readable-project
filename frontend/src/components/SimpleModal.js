import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const SimpleModal = ({ 
	showModal,
	children, 
	modalTitle, 
	txtBtnOk, 
	txtBtnCancel, 
	handletBtnOk, 
	handlerBtnCancel
}) => (
	<div>
		<Modal show={showModal}>
			<Modal.Header closeButton>
				<Modal.Title>{modalTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => handlerBtnCancel}>{txtBtnCancel}</Button>
				<Button onClick={() => handletBtnOk} bsStyle="primary">{txtBtnOk}</Button>
			</Modal.Footer>
		</Modal>
	</div>
)

export default SimpleModal