import React, { Component } from 'react'
import { connect } from 'react-redux'
// Actions
import { fetchAllPosts, fetchVoting, sortPosts } from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
// Components
import Select from '../components/Select'
import ShowCategories from '../components/ShowCategories'
import PostsSummary from '../components/PostsSummary'


class Posts extends Component {

    componentDidMount() {
        this.props.fetchAllPosts(this.props.sort)
        this.props.fetchAllCategories()

    }

    sortHandler = (sortBy) => {
        this.props.sortPosts(sortBy)
    }

    filterByCategory() {

    }

    render() {

        const { posts, sort, sortOptions, categories, fetchVoting } = this.props
        return (
            <div>
                <ShowCategories categories={categories} />
                <h2>Posts</h2>
                <Select
                    currentSelected={sort.text}
                    options={sortOptions}
                    handler={this.sortHandler}
                />
                <PostsSummary 
                    posts={posts} 
                    sort={sort}
                    updateVote={fetchVoting}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    categories: state.categories,
    sort: state.sort.post,
    sortOptions: state.sortOptions
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPosts: (sortBy) => dispatch(fetchAllPosts(sortBy)),
    fetchVoting: (postId, vote, sortBy) => dispatch(fetchVoting(postId, vote, sortBy)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    sortPosts: (sortBy) => { 
        dispatch(setSort('post', sortBy))
        dispatch(sortPosts(sortBy))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
