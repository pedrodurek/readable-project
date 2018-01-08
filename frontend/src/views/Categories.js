import React, { Component } from 'react';
import { connect } from 'react-redux'
// Actions
import { fetchAllPostsByCategory, fetchVoting, sortPosts } from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
// Components
import Select from '../components/Select'
import ShowCategories from '../components/ShowCategories'
import PostsSummary from '../components/PostsSummary'

class Categories extends Component {

	componentDidMount() {
        this.props.fetchAllPostsByCategory('xxx', this.props.sort)
        this.props.fetchAllCategories()
    }
    
    sortHandler = (sortBy) => {
        this.props.sortPosts(sortBy)
    }

    filterByCategory() {
		
    }

    render() {

        const { posts, sort, sortOptions, categories, fetchVoting } = this.props
        console.log(sort)
        return (
            <div>
                <ShowCategories categories={categories} />
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
    fetchAllPostsByCategory: (category, sortBy) => dispatch(fetchAllPostsByCategory(category, sortBy)),
    fetchVoting: (postId, vote, sortBy) => dispatch(fetchVoting(postId, vote, sortBy)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    sortPosts: (sortBy) => { 
        dispatch(setSort('post', sortBy))
        dispatch(sortPosts(sortBy))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)