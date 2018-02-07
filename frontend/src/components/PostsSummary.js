import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Label, Badge, Grid, Row, Col } from 'react-bootstrap'
import { If, Then, Else } from 'react-if'
import VoteOptions from './VoteOptions'
import WrappedLabel from './WrappedLabel'
import '../styles/PostsSummary.css'

const PostsSummary = ({ posts, updateVote }) => (
	<div className="content">
		<If condition={posts.length > 0}>
			<Then>
				<Grid className="list-row">
					{posts.map((post) => (
						<Row key={post.id}>
							<Col md={6} mdPull={6}>
								<Link to={`/${post.category}/${post.id}`}>
									<h3 className="post-title">{post.title}</h3>
								</Link>
								<p>
									<WrappedLabel to={`/${post.category}`}>
										{post.category}
									</WrappedLabel>
								</p>
								<p>
									<span className="post-author">
										Created by <b>{post.author}</b>
									</span>
								</p>
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
					))}
				</Grid>
			</Then>
			<Else>
				<h4>There is not any post for this category</h4>
			</Else>
		</If>
	</div>
)

PostsSummary.propTypes = {
	posts: PropTypes.array.isRequired,
	updateVote: PropTypes.func.isRequired
}

export default PostsSummary
