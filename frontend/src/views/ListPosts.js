import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// Actions
import { fetchAllPosts, fetchAllPostsByCategory, fetchVotingAndSort, sortPosts } from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
// Components
import Select from '../components/Select'
import ShowCategories from '../components/ShowCategories'
import PostsSummary from '../components/PostsSummary'
import WrappedButton from '../components/WrappedButton'

class ListPosts extends Component {
	componentDidMount() {
		const { match: { params: { category } }, sort } = this.props
		if (category) {
			this.props.fetchAllPostsByCategory(category, sort)
		} else {			
			this.props.fetchAllPosts(this.props.sort)
		}
		this.props.fetchAllCategories()
		window.scrollTo(0, 0)
	}

	componentWillReceiveProps(newProps) {
		const { match: { params: { category } }, sort } = this.props
		const { match: { params } } = newProps
		console.log(category)
		console.log(params.category)
		if (params.category && (category !== params.category)) {
			this.props.fetchAllPostsByCategory(params.category, sort)
		} else if (category && !params.category) {
			this.props.fetchAllPosts(this.props.sort)
		}
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
						className="select-sort"
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
	fetchAllPostsByCategory: (category, sortBy) =>
		dispatch(fetchAllPostsByCategory(category, sortBy)),
	fetchVoting: (postId, vote, sortBy) =>
		dispatch(fetchVotingAndSort(postId, vote, sortBy)),
	fetchAllCategories: () => dispatch(fetchAllCategories()),
	sortPosts: (sortBy) => {
		dispatch(setSort('post', sortBy))
		dispatch(sortPosts(sortBy))
	}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPosts))
