import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { submit } from 'redux-form'
import { fetchPostById, fetchRemovePost, fetchVoting as fetchVotingPost } from '../actions/posts'
import { 
	fetchCommentsByPost, 
	fetchVoting as fetchVotingComment, 
	fetchAddComment,
	fetchRemoveComment
} from '../actions/comments'
import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'
import SimpleModal from '../components/SimpleModal'
import CommentForm from '../components/CommentForm'


class Post extends Component {

	state = {
		showModal: false,
		editComment: false,
		comment: {}
	}

	componentDidMount() {

		const { match: { params: { post_id } } } = this.props
		this.props.fetchPostById(post_id)
		this.props.fetchCommentsByPost(post_id)

	}

	openModal = () => {
		this.setState({ showModal: true })
	}

	closeModal = () => {
		this.setState({ showModal: false })
	}

	handleComment = (data) => {

		this.closeModal()
		this.props.fetchAddComment(this.props.post.id, data);
		
	}

	handleEditComment = (commentId) => {


		this.setState({ 
			editComment: true, 
			showModal: true,
			comment: this.props.comments
				.find((comment) => comment.id === commentId)	
		})

	}

	handleRemovePost = (postId) => {
		this.props.fetchRemovePost(postId)
		this.props.history.push('/')
	}
	
	handleRemoveComment = (commentId) => {
		this.props.fetchRemoveComment(commentId)
	}

	render() {

		const { post, comments, fetchVotingPost, fetchVotingComment, submitComment } = this.props
		const { showModal, editComment, comment } = this.state
		return (
			<div>
				<SimpleModal 
					showModal={showModal}
					modalTitle={`${editComment?'Edit':'Create'} Comment`}
					txtBtnOk={`${editComment?'Save':'Create'}`}
					handleBtnOk={submitComment}
					handleBtnCancel={this.closeModal}
				>
					<CommentForm
						handleComment={this.handleComment}
						initialValues={comment}
					/>
				</SimpleModal>
				<PostDetails 
					post={post}
					updateVote={fetchVotingPost}
					handleRemovePost={this.handleRemovePost}
				/>
				<Button bsStyle="primary" onClick={this.openModal}>
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
	comments: state.comments
})

const mapDispatchToProps = (dispatch) => ({
	fetchPostById: (id) => dispatch(fetchPostById(id)),
	fetchVotingPost: (postId, vote) => dispatch(fetchVotingPost(postId, vote)),
	fetchCommentsByPost: (postId) => dispatch(fetchCommentsByPost(postId)),
	fetchVotingComment: (commentId, vote) => dispatch(fetchVotingComment(commentId, vote)),
	submitComment: () => dispatch(submit('initializeCommentForm')),
	fetchAddComment: (postId, data) => dispatch(fetchAddComment(postId, data)),
	fetchRemovePost: (postId) => dispatch(fetchRemovePost(postId)),
	fetchRemoveComment: (commentId) => dispatch(fetchRemoveComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
