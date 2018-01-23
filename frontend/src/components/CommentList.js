import React from 'react'
import FaEdit from 'react-icons/lib/fa/edit'
import VoteOptions from './VoteOptions'

const CommentList = ({ comments, updateVote, handleEditComment }) => (
	<ol>
		{comments.map((comment) => (
			<li key={comment.id}>
				<div>{comment.body}</div>
				<div>Author: {comment.author}</div>
				<div>Score: {comment.voteScore}</div>
				<VoteOptions handler={(vote) => updateVote(comment.id, vote)} />
				<button onClick={() => handleEditComment(comment.id)}>
					<FaEdit size={20} />
					Edit
				</button>
			</li>	
		))}
	</ol>
)

export default CommentList