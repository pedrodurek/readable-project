import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'react-bootstrap'

const BreadcrumpItem = ({ history, match, title }) => (
    <Breadcrumb.Item active={match.isExact} onClick={() => {
        history.push(match.url)
    }}>
        {(title && (
            title
        )) || (
           match.url.substr(match.url.lastIndexOf('/')+1, match.url.length) 
        )}
    </Breadcrumb.Item>
)

BreadcrumpItem.propTypes = {
}

BreadcrumpItem.defaultProps = {
}

export default BreadcrumpItem