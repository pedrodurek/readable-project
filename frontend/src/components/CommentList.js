import React from 'react'
import VoteOptions from './VoteOptions'

const CommentList = ({ comments, updateVote }) => (
	<ol>
		{comments.map((comment) => (
			<li key={comment.id}>
				<div>{comment.body}</div>
				<div>Author: {comment.author}</div>
				<div>Score: {comment.voteScore}</div>
				<VoteOptions handler={(vote) => updateVote(comment.id, vote)} />
			</li>	
		))}
	</ol>
)

export default CommentList