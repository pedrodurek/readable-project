import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Row, Col, Badge } from 'react-bootstrap'
import VoteOptions from './VoteOptions'

const CommentList = ({
	comments,
	updateVote,
	handleEditComment,
	handleRemoveComment
}) => (
	<Grid className="list-row">
		{comments.map((comment) => (
			<Row key={comment.id}>
				<Col md={6} mdPull={6}>
					<h5>{comment.body}</h5>
					<p>
						<span className="post-author">
							Created by <b>{comment.author}</b>
						</span>
					</p>
					<div className="btn-group">
						<Button
							onClick={() => handleEditComment(comment.id)}
							bsSize="xsmall"
							bsStyle="default"
						>
							Edit
						</Button>
						<Button
							onClick={() => handleRemoveComment(comment.id)}
							bsSize="xsmall"
							bsStyle="danger"
						>
							Delete
						</Button>
					</div>
				</Col>
				<Col md={6} mdPull={6}>
					<div>
						<p>
							<Badge
								bsStyle={
									comment.voteScore >= 0
										? 'success'
										: 'danger'
								}
							>
								{comment.voteScore}
							</Badge>
							<span> votes</span>
						</p>
						<VoteOptions
							handle={(vote) => updateVote(comment.id, vote)}
						/>
					</div>
				</Col>
			</Row>
		))}
	</Grid>
)

CommentList.propTypes = {
	comments: PropTypes.array.isRequired,
	updateVote: PropTypes.func.isRequired,
	handleEditComment: PropTypes.func.isRequired,
	handleRemoveComment: PropTypes.func.isRequired
}

export default CommentList
