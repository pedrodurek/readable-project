import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById } from '../actions/posts'

class PostDetails extends Component {


	componentDidMount() {

		const { id } = this.props.match.params
		this.props.fetchPostById(id)

	}
	render() {
		return (
			<div></div>
		)
	}

}

const mapStateToProps = (state) => ({
	post: state.post
})

const mapDispatchToProps = (dispatch) => ({
	fetchPostById: (id) => dispatch(fetchPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
