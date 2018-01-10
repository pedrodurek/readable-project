import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById, fetchVoting as fetchVotingPost } from '../actions/posts'
import { fetchCommentsByPost, fetchVoting as fetchVotingComment } from '../actions/comments'
import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'

class Post extends Component {


	componentDidMount() {

		const { id } = this.props.match.params
		this.props.fetchPostById(id)
		this.props.fetchCommentsByPost(id)

	}

	render() {

		const { post, comments, fetchVotingPost, fetchVotingComment } = this.props
		return (
			<div>
				<PostDetails 
					post={post}
					updateVote={fetchVotingPost}
				/>
				<CommentList 
					comments={comments} 
					updateVote={fetchVotingComment}
				/>
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
	fetchVotingPost: (postId, vote) => dispatch(fetchVotingPost(postId, vote)),
	fetchCommentsByPost: (postId) => dispatch(fetchCommentsByPost(postId)),
	fetchVotingComment: (commentId, vote) => dispatch(fetchVotingComment(commentId, vote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
