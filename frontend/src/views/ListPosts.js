import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// Actions
import {
    fetchAllPosts,
    fetchAllPostsByCategory,
    fetchRemovePost,
    fetchVotingAndSort,
    sortPosts
} from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
// Components
import Select from '../components/Select'
import ShowCategories from '../components/ShowCategories'
import PostsSummary from '../components/PostsSummary'
import WrappedButton from '../components/WrappedButton'
import ConfirmModal from '../components/ConfirmModal'

class ListPosts extends Component {
    state = {
        showConfirmModal: false,
        handleRemove: () => {}
    }
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
        if (params.category && category !== params.category) {
            this.props.fetchAllPostsByCategory(params.category, sort)
        } else if (category && !params.category) {
            this.props.fetchAllPosts(this.props.sort)
        }
    }

    sortHandle = (sortBy) => {
        this.props.sortPosts(sortBy)
    }

    openConfirmModal = (callback) => {
        this.setState({ showConfirmModal: true, handleRemove: callback })
    }

    handleRemovePost = (postId) => {
        this.openConfirmModal(() => {
            this.props.fetchRemovePost(postId, this.closeConfirmModal)
        })
    }

    closeConfirmModal = () => {
        this.setState({ showConfirmModal: false })
    }

    render() {
        const { posts, sort, sortOptions, categories, fetchVoting } = this.props
        const { handleRemove, showConfirmModal } = this.state
        return (
            <div>
                <ConfirmModal
                    showModal={showConfirmModal}
                    title="Remove Post"
                    message="Are you sure do you want to remove this post?"
                    onConfirm={handleRemove}
                    onCancel={this.closeConfirmModal}
                />
                <ShowCategories categories={categories} />
                <h2 className="main-header">Posts</h2>
                <div className="content">
                    <WrappedButton to="/new">New Post</WrappedButton>
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
                        handleRemovePost={this.handleRemovePost}
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
    fetchRemovePost: (postId, callback) =>
        dispatch(fetchRemovePost(postId, callback)),
    fetchVoting: (postId, vote, sortBy) =>
        dispatch(fetchVotingAndSort(postId, vote, sortBy)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    sortPosts: (sortBy) => {
        dispatch(setSort('post', sortBy))
        dispatch(sortPosts(sortBy))
    }
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ListPosts)
)
