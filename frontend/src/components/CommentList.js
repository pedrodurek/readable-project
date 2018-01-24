import React from 'react'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import VoteOptions from './VoteOptions'

const CommentList = ({ comments, updateVote, handleEditComment, handleRemoveComment }) => (
	<ol>
		{comments.map((comment) => (
			<li key={comment.id}>
				<div>{comment.body}</div>
				<div>Author: {comment.author}</div>
				<div>Score: {comment.voteScore}</div>
				<VoteOptions handle={(vote) => updateVote(comment.id, vote)} />
				<button onClick={() => handleEditComment(comment.id)}>
					<FaEdit size={20} />
					Edit
				</button>
				<button onClick={() => handleRemoveComment(comment.id)}>
					<FaTrash size={20} />
					Delete
				</button>
			</li>	
		))}
	</ol>
)

export default CommentList