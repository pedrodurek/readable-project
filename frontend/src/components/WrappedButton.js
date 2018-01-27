import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
;
const WrappedButton = ({ url, children }) => (
	<Link to={url}>
		<Button bsStyle="primary">
			{children}
		</Button>
	</Link>
)

WrappedButton.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default WrappedButton
