import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById, fetchVoting, setPost } from '../actions/posts'
import PostDetails from '../components/PostDetails'

class Post extends Component {


	componentDidMount() {

		const { id } = this.props.match.params
		this.props.fetchPostById(id)

	}
	render() {

		const { post, fetchVoting } = this.props
		return (
			<div>
				<PostDetails 
					post={post}
					updateVote={fetchVoting}
				/>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	post: state.post
})

const mapDispatchToProps = (dispatch) => ({
	fetchPostById: (id) => dispatch(fetchPostById(id)),
	fetchVoting: (postId, vote) => dispatch(fetchVoting(postId, vote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
