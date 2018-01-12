import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { fetchPostById, fetchVoting as fetchVotingPost } from '../actions/posts'
import { fetchCommentsByPost, fetchVoting as fetchVotingComment } from '../actions/comments'
import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'
import SimpleModal from '../components/SimpleModal'
import CommentForm from '../components/CommentForm'

class Post extends Component {

	state = {
		showModal: false,
		comment: {
			author: 'xxx',
			body: 'aaaa'
		}
	}

	componentDidMount() {

		const { id } = this.props.match.params
		this.props.fetchPostById(id)
		this.props.fetchCommentsByPost(id)

	}

	openModalAddComment = () => {
		this.setState({ showModal: true })
	}

	handleComment = (data) => {
		console.log(data)
	}

	render() {

		const { post, comments, fetchVotingPost, fetchVotingComment } = this.props
		const { showModal } = this.state
		return (
			<div>
				<SimpleModal 
					showModal={showModal}
					modalTitle={'Create Comment'}
					txtBtnOk={'Create'}
					handleBtnOk={() => {}}
				>
					<CommentForm 
						handleSubmit={this.handleComment}
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
	fetchVotingComment: (commentId, vote) => dispatch(fetchVotingComment(commentId, vote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
