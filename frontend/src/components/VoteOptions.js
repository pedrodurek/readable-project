import React from 'react'
import FaSmileO from 'react-icons/lib/fa/smile-o'
import FaFrownO from 'react-icons/lib/fa/frown-o'

const VoteOptions = ({ handle }) => (
	<div className="post-vote">
	    <button onClick={() => handle('upVote')} className="icon-btn">
	        <FaSmileO size={20} />
	    </button>
	    <button onClick={() => handle('downVote')} className="icon-btn">
	        <FaFrownO size={20} />
	    </button>                            
	</div>
)

export default VoteOptions