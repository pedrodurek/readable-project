import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { submit } from 'redux-form'
import {
	fetchPostById,
	fetchRemovePost,
	fetchVoting as fetchVotingPost
} from '../actions/posts'
import {
	fetchCommentsByPost,
	fetchVoting as fetchVotingComment,
	fetchAddComment,
	fetchRemoveComment
} from '../actions/comments'
import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'
import SimpleModal from '../components/SimpleModal'
import ConfirmModal from '../components/ConfirmModal'
import CommentForm from '../components/CommentForm'

class Post extends Component {
	state = {
		showSimpleModal: false,
		showConfirmModal: false,
		isCommentAction: false,
		comment: {},
		handleRemove: () => {}
	}

	componentDidMount() {
		console.log('teste')
		const { match: { params: { post_id } } } = this.props
		this.props.fetchPostById(post_id)
		this.props.fetchCommentsByPost(post_id)
	}

	openSimpleModal = () => {
		this.setState({ showSimpleModal: true })
	}

	closeSimpleModal = () => {
		this.setState({ showSimpleModal: false })
	}

	openConfirmModal = (callback) => {
		this.setState({ showConfirmModal: true, handleRemove: callback })
	}

	closeConfirmModal = () => {
		this.setState({ showConfirmModal: false })
	}

	handleComment = (data) => {
		this.closeSimpleModal()
		this.props.fetchAddComment(this.props.post.id, data)
	}

	handleEditComment = (commentId) => {
		this.setState({
			isCommentAction: true,
			showSimpleModal: true,
			comment: this.props.comments.find(
				(comment) => comment.id === commentId
			)
		})
	}

	handleRemovePost = (postId) => {
		this.setState({ isCommentAction: false })
		this.openConfirmModal(() => {
			this.props.fetchRemovePost(postId, () => {
				this.props.history.push('/')
			})
		})
	}

	handleRemoveComment = (commentId) => {
		this.setState({ isCommentAction: true })
		this.openConfirmModal(() => {
			this.props.fetchRemoveComment(commentId)
			this.closeConfirmModal()
		})
	}

	render() {
		const {
			post,
			comments,
			fetchVotingPost,
			fetchVotingComment,
			submitComment
		} = this.props
		const {
			showSimpleModal,
			showConfirmModal,
			isCommentAction,
			comment,
			handleRemove
		} = this.state
		return (
			<div>
				<SimpleModal
					showModal={showSimpleModal}
					title={`${isCommentAction ? 'Edit' : 'Create'} Comment`}
					confirmLabel={`${isCommentAction ? 'Save' : 'Create'}`}
					onConfirm={submitComment}
					onCancel={this.closeSimpleModal}
				>
					<CommentForm
						handleComment={this.handleComment}
						initialValues={comment}
					/>
				</SimpleModal>
				<ConfirmModal
					showModal={showConfirmModal}
					title={`Remove ${isCommentAction ? 'Comment' : 'Post'}`}
					message={`Are you sure do you want do remove this ${
						isCommentAction ? 'comment' : 'post'
					}?`}
					onConfirm={handleRemove}
					onCancel={this.closeConfirmModal}
				/>
				<PostDetails
					post={post}
					updateVote={fetchVotingPost}
					handleRemovePost={this.handleRemovePost}
				/>
				<Button bsStyle="primary" onClick={this.openSimpleModal}>
					Create Comment
				</Button>
				<CommentList
					comments={comments}
					updateVote={fetchVotingComment}
					handleEditComment={this.handleEditComment}
					handleRemoveComment={this.handleRemoveComment}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	post: state.post,
	comments: state.comments.comments
})

const mapDispatchToProps = (dispatch) => ({
	fetchPostById: (id) => dispatch(fetchPostById(id)),
	fetchVotingPost: (postId, vote) => dispatch(fetchVotingPost(postId, vote)),
	fetchCommentsByPost: (postId) => dispatch(fetchCommentsByPost(postId)),
	fetchVotingComment: (commentId, vote) =>
		dispatch(fetchVotingComment(commentId, vote)),
	submitComment: () => dispatch(submit('initializeCommentForm')),
	fetchAddComment: (postId, data) => dispatch(fetchAddComment(postId, data)),
	fetchRemovePost: (postId, callback) =>
		dispatch(fetchRemovePost(postId, callback)),
	fetchRemoveComment: (commentId) => dispatch(fetchRemoveComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
