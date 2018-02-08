import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Footer.css'

const Footer = ({ content }) => (
    <div className="footer-container">
        <span>{content}</span>
    </div>
)

Footer.propTypes = {
    content: PropTypes.string.isRequired
}

export default Footer