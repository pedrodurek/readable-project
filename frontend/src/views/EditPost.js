import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import { fetchPostById, fetchEditPost } from '../actions/posts'
import { fetchAllCategories } from '../actions/categories'

class EditPost extends Component {
	componentDidMount() {
		const { match: { params: { post_id } } } = this.props
		this.props.fetchPostById(post_id)
		this.props.fetchAllCategories()
		window.scrollTo(0, 0)
	}

	handleEditPost = (data) => {
		const { history, post: { id } } = this.props
		this.props.fetchEditPost(id, data, () => {
			history.push('/')
		})
	}

	render() {
		const { post, categories } = this.props
		return (
			<div className="small-container">
				<h2 className="main-header">Edit Post</h2>
				<div className="content">
					<PostForm
						handlePost={this.handleEditPost}
						categories={categories.map((category) => ({
							text: category.name,
							key: category.path
						}))}
						initialValues={post}
						newPost={false}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	post: state.post.post,
	categories: state.categories.categories
})

const mapDispatchToProps = (dispatch) => ({
	fetchPostById: (id) => dispatch(fetchPostById(id)),
	fetchAllCategories: () => dispatch(fetchAllCategories()),
	fetchEditPost: (postId, data, callback) =>
		dispatch(fetchEditPost(postId, data, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
