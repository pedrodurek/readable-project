import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { submit } from 'redux-form'
import uuidv1 from 'uuid/v1'
import { fetchPostById, fetchVoting as fetchVotingPost } from '../actions/posts'
import { fetchCommentsByPost, fetchVoting as fetchVotingComment, fetchAddComment } from '../actions/comments'
import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'
import SimpleModal from '../components/SimpleModal'
import CommentForm from '../components/CommentForm'


class Post extends Component {

	state = {
		showModal: false
	}

	componentDidMount() {

		const { post_id } = this.props.match.params
		this.props.fetchPostById(post_id)
		this.props.fetchCommentsByPost(post_id)

	}

	openModalAddComment = () => {
		this.setState({ showModal: true })
	}

	handleComment = (data) => {

		this.setState({ showModal: false })
		this.props.fetchAddComment({
			id: uuidv1(),
			...data,
			timestamp: Date.now(),
			parentId: this.props.post.id
		})
		
	}

	render() {

		const { post, comments, fetchVotingPost, fetchVotingComment, submitComment } = this.props
		const { showModal } = this.state
		return (
			<div>
				<SimpleModal 
					showModal={showModal}
					modalTitle={'Create Comment'}
					txtBtnOk={'Create'}
					handleBtnOk={submitComment}
				>
					<CommentForm
						handleComment={this.handleComment}
					/>
				</SimpleModal>
				<PostDetails 
					post={post}
					updateVote={fetchVotingPost}
				/>
				<Button bsStyle="primary" onClick={this.openModalAddComment}>
					Create Comment
				</Button>
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
	fetchVotingComment: (commentId, vote) => dispatch(fetchVotingComment(commentId, vote)),
	submitComment: () => dispatch(submit('initializeCommentForm')),
	fetchAddComment: (comment) => dispatch(fetchAddComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
