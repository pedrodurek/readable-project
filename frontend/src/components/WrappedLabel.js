import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/WrappedLabel.css'

const WrappedLabel = ({ to, children }) => (
    <Link to={to}>
        <Label className="label-dark-link">{children}</Label>
    </Link>
)

WrappedLabel.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default WrappedLabel
