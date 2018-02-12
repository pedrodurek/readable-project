import React from 'react'
import PropTypes from 'prop-types'
import { Button, Badge, Row, Col } from 'react-bootstrap'
import { formatDate } from '../utils/helper'
import VoteOptions from '../components/VoteOptions'
import WrappedButton from '../components/WrappedButton'
import WrappedLabel from './WrappedLabel'

const PostDetails = ({ post, updateVote, handleRemovePost, children }) => (
	<Row>
		<Col md={6} mdPull={6}>
			{children}
			<p>
				<WrappedLabel to={`/${post.category}`}>
					{post.category}
				</WrappedLabel>
			</p>
			<p>
				<span className="author-details">
					Created by <b>{post.author}</b> at{' '}
					{formatDate(post.timestamp)}
				</span>
			</p>
			<div className="btn-group">
				<WrappedButton
					to={`/${post.category}/${post.id}/edit`}
					size="xsmall"
					colour="default"
				>
					Edit
				</WrappedButton>
				<Button
					bsSize="xsmall"
					bsStyle="danger"
					onClick={() => handleRemovePost(post.id)}
				>
					Delete
				</Button>
			</div>
		</Col>
		<Col md={6} mdPull={6}>
			<p>
				<Badge bsStyle={post.voteScore >= 0 ? 'success' : 'danger'}>
					{post.voteScore}
				</Badge>
				<span> votes</span>
			</p>
			<p>
				<Badge>{post.commentCount}</Badge>
				<span> answers</span>
			</p>
			<VoteOptions handle={(vote) => updateVote(post.id, vote)} />
		</Col>
	</Row>
)

PostDetails.propTypes = {
	post: PropTypes.object.isRequired,
	updateVote: PropTypes.func.isRequired,
	handleRemovePost: PropTypes.func.isRequired
}

export default PostDetails
