import React from 'react'
import PropTypes from 'prop-types'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { Link } from 'react-router-dom'
import { Button, Label, Badge, Grid, Row, Col } from 'react-bootstrap'
import { formatDate } from '../utils/helper'
import VoteOptions from '../components/VoteOptions'
import WrappedButton from '../components/WrappedButton'
import WrappedLabel from './WrappedLabel'

const PostDetails = ({ post, updateVote, handleRemovePost }) => (
	<div className="list-posts">
		<h2 className="main-header">{post.title}</h2>
		<Row className="content">
			<Col md={6} mdPull={6}>
				<div>{post.body}</div>
				<p>
					<WrappedLabel to={`/${post.category}`}>
						{post.category}
					</WrappedLabel>
				</p>
				<p>
					<span className="post-author">
						Created by <b>{post.author}</b> at {formatDate(post.timestamp)}
					</span>
				</p>
				<div className="btn-group">
					<WrappedButton to={`/post/${post.id}`} size="xsmall">
						<FaEdit size={20} />
						Edit
					</WrappedButton>
					<Button bsSize="xsmall" onClick={() => handleRemovePost(post.id)}>
						<FaTrash size={20} />
						Delete
					</Button>
				</div>
			</Col>
			<Col md={6} mdPull={6}>
				<div className="post-status">
					<p>
						<Badge
							bsStyle={
								post.voteScore >= 0
									? 'success'
									: 'danger'
							}
						>
							{post.voteScore}
						</Badge>
						<span> votes</span>
					</p>
					<p>
						<Badge>{post.commentCount}</Badge>
						<span> answers</span>
					</p>
					<VoteOptions
						handle={(vote) =>
							updateVote(post.id, vote)
						}
					/>
				</div>
			</Col>
		</Row>
	</div>
)

PostDetails.propTypes = {
	post: PropTypes.object.isRequired,
	updateVote: PropTypes.func.isRequired,
	handleRemovePost: PropTypes.func.isRequired
}

export default PostDetails