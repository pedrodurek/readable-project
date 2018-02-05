import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WrappedButton = ({ to, children, size }) => (
	<Link to={to}>
		<Button bsStyle="primary" bsSize={size}>
			{children}
		</Button>
	</Link>
)

WrappedButton.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default WrappedButton
