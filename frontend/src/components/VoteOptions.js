import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import FaSmileO from 'react-icons/lib/fa/smile-o'
import FaFrownO from 'react-icons/lib/fa/frown-o'

const VoteOptions = ({ handle }) => (
	<div className="post-vote">
	    <Button onClick={() => handle('upVote')} className="icon-btn">
	        <FaSmileO size={20} />
	    </Button>
	    <Button onClick={() => handle('downVote')} className="icon-btn">
	        <FaFrownO size={20} />
	    </Button>                            
	</div>
)

VoteOptions.propTypes = {
	handle: PropTypes.func.isRequired
}

export default VoteOptions