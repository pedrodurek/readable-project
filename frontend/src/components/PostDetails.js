import React from 'react'
import PropTypes from 'prop-types'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helper'
import VoteOptions from '../components/VoteOptions'

const PostDetails = ({ post, updateVote, handleRemovePost }) => (
	<div>
        <div className="post-title">{post.title}</div>
        <div className="post-author">Author: {post.author}</div>
        <div className="post-author">Date: {formatDate(post.timestamp)}</div>
        <div className="post-num-comments">Number of comments: {post.commentCount}</div>
        <div className="post-vote-score">Score: {post.voteScore}</div>
        <div className="post-category">Category: {post.category}</div>
		<button>
			<Link to={`/post/${post.id}`}>
				<FaEdit size={20} />
				Edit
			</Link>
		</button>
		<button onClick={() => handleRemovePost(post.id)}>
			<FaTrash size={20} />
			Delete
		</button>
        <VoteOptions handle={(vote) => updateVote(post.id, vote)} />
	</div>
)

PostDetails.propTypes = {
	post: PropTypes.object.isRequired,
	updateVote: PropTypes.func.isRequired,
	handleRemovePost: PropTypes.func.isRequired
}

export default PostDetails