import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Badge, Grid, Row, Col } from 'react-bootstrap'
import { If, Then, Else } from 'react-if'
import VoteOptions from './VoteOptions'
import WrappedLabel from './WrappedLabel'
import PostDetails from './PostDetails'
import '../styles/PostsSummary.css'

const PostsSummary = ({ posts, updateVote, handleRemovePost }) => (
	<If condition={posts.length > 0}>
		<Then>
			<Grid className="list-row">
				{posts.map((post) => (
					<PostDetails 
						key={post.id}
						post={post}
						updateVote={updateVote}
						handleRemovePost={handleRemovePost}
					>
						<Link to={`/${post.category}/${post.id}`}>
							<h3 className="post-title">{post.title}</h3>
						</Link>
					</PostDetails>
				))}
			</Grid>
		</Then>
		<Else>
			<h4 className="no-posts">There is not any post for this category</h4>
		</Else>
	</If>
)

PostsSummary.propTypes = {
	posts: PropTypes.array.isRequired,
	updateVote: PropTypes.func.isRequired
}

export default PostsSummary
