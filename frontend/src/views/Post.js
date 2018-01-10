import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById, fetchVoting } from '../actions/posts'
import { fetchCommentsByPost } from '../actions/comments'
import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'

class Post extends Component {


	componentDidMount() {

		const { id } = this.props.match.params
		this.props.fetchPostById(id)
		this.props.fetchCommentsByPost(id)

	}
	render() {

		const { post, comments, fetchVoting } = this.props
		return (
			<div>
				<PostDetails 
					post={post}
					updateVote={fetchVoting}
				/>
				<CommentList comments={comments} />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	post: state.post,
	comments: state.comments
})

const mapDispatchToProps = (dispatch) => ({
	fetchPostById: (id) => dispatch(fetchPostById(id)),
	fetchVoting: (postId, vote) => dispatch(fetchVoting(postId, vote)),
	fetchCommentsByPost: (postId) => dispatch(fetchCommentsByPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
