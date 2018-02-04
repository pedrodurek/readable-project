import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Footer.css'

const Footer = ({ content }) => (
    <div className="footer-container">
        <span>{content}</span>
    </div>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer