import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// Actions
import { fetchAllPosts, fetchVotingAndSort, sortPosts } from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
// Components
import Select from '../components/Select'
import ShowCategories from '../components/ShowCategories'
import PostsSummary from '../components/PostsSummary'
import WrappedButton from '../components/WrappedButton'

class Posts extends Component {
	componentDidMount() {
		this.props.fetchAllPosts(this.props.sort)
		this.props.fetchAllCategories()
	}

	sortHandle = (sortBy) => {
		this.props.sortPosts(sortBy)
	}

	render() {
		const { posts, sort, sortOptions, categories, fetchVoting } = this.props
		return (
			<div>
				<ShowCategories categories={categories} />
				<h2 className="main-header">Posts</h2>
				<div className="content">
					<WrappedButton to={'/post/new'}>New Post</WrappedButton>
					<Select
						value={sort.text}
						options={sortOptions}
						handle={this.sortHandle}
						className="btn-select"
					/>
					<PostsSummary
						posts={posts}
						updateVote={(postId, vote) =>
							fetchVoting(postId, vote, sort)
						}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	categories: state.categories.categories,
	sort: state.sort.post,
	sortOptions: state.sortOptions
})

const mapDispatchToProps = (dispatch) => ({
	fetchAllPosts: (sortBy) => dispatch(fetchAllPosts(sortBy)),
	fetchVoting: (postId, vote, sortBy) =>
		dispatch(fetchVotingAndSort(postId, vote, sortBy)),
	fetchAllCategories: () => dispatch(fetchAllCategories()),
	sortPosts: (sortBy) => {
		dispatch(setSort('post', sortBy))
		dispatch(sortPosts(sortBy))
	}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))
