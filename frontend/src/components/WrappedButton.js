import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WrappedButton = ({ to, children, colour, size }) => (
    <Link to={to}>
        <Button bsStyle={colour} bsSize={size}>
            {children}
        </Button>
    </Link>
)

WrappedButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    colour: PropTypes.string,
    size: PropTypes.string
}

WrappedButton.defaultProps = {
    confirmLabel: 'OK',
    colour: 'primary'
}

export default WrappedButton
