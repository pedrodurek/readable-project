import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// Actions
import { fetchAllPostsByCategory, fetchVoting, sortPosts } from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
// Components
import Select from '../components/Select'
import ShowCategories from '../components/ShowCategories'
import PostsSummary from '../components/PostsSummary'
import WrappedButton from '../components/WrappedButton'

class Categories extends Component {

	componentDidMount() {

        const { match: { params: { category } }, sort } = this.props
        this.props.fetchAllPostsByCategory(category, sort)
        this.props.fetchAllCategories()

    }

    componentWillReceiveProps(newProps) {

        const { match: { params: { category } }, sort } = this.props
        const { match: { params } } = newProps
        if (category !== params.category) {
            this.props.fetchAllPostsByCategory(params.category, sort)
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
                <h2>Posts</h2>
                <Select
                    value={sort.text}
                    options={sortOptions}
                    handle={this.sortHandle}
                />
                <WrappedButton url="/post/new">
                    New Post
                </WrappedButton>
                <PostsSummary 
                    posts={posts} 
                    updateVote={(postId, vote) => fetchVoting(postId, vote, sort)}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    posts: state.posts,
    categories: state.categories.categories,
    sort: state.sort.post,
    sortOptions: state.sortOptions
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPostsByCategory: (category, sortBy) => dispatch(fetchAllPostsByCategory(category, sortBy)),
    fetchVoting: (postId, vote, sortBy) => dispatch(fetchVoting(postId, vote, sortBy)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    sortPosts: (sortBy) => { 
        dispatch(setSort('post', sortBy))
        dispatch(sortPosts(sortBy))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)