import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById } from '../actions/posts'
import PostDetails from '../components/PostDetails'

class Post extends Component {


	componentDidMount() {

		const { id } = this.props.match.params
		this.props.fetchPostById(id)

	}
	render() {

		const { post } = this.props
		return (
			<div>
				<PostDetails post={post}/>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	post: state.post
})

const mapDispatchToProps = (dispatch) => ({
	fetchPostById: (id) => dispatch(fetchPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
