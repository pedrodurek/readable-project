import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WrappedButton = ({ url, children }) => (
	<Link to={url}>
		<Button bsStyle="primary">
			{children}
		</Button>
	</Link>
)

export default WrappedButton
