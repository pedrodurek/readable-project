import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import '../styles/VoteOptions.css'

const VoteOptions = ({ handle }) => (
    <div>
        <Button
            className="btn-icon"
            bsStyle="success"
            onClick={() => handle('upVote')}
        >
            <FaThumbsUp size={20} />
        </Button>
        <Button
            className="btn-icon"
            bsStyle="danger"
            onClick={() => handle('downVote')}
        >
            <FaThumbsDown size={20} />
        </Button>
    </div>
)

VoteOptions.propTypes = {
    handle: PropTypes.func.isRequired
}

export default VoteOptions
