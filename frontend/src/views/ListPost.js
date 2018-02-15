import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import sortBy from 'sort-by'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'
import { If } from 'react-if'
import { getNumPages, getIndexesPage } from '../utils/helper'
import {
    fetchAllPosts,
    fetchAllPostsByCategory,
    fetchRemovePost,
    fetchVoting
} from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
import Select from '../components/Select'
import ShowCategories from '../components/ShowCategories'
import PostsSummary from '../components/PostsSummary'
import WrappedButton from '../components/WrappedButton'
import ConfirmModal from '../components/ConfirmModal'

class ListPost extends Component {
    state = {
        showConfirmModal: false,
        handleRemove: () => {},
        pagination: {
            activePage: 1,
            perPage: 5
        }
    }

    componentDidMount() {
        const { match: { params: { category } } } = this.props
        if (category) {
            this.props.fetchAllPostsByCategory(category)
        } else {
            this.props.fetchAllPosts()
        }
        this.props.fetchAllCategories()
        window.scrollTo(0, 0)
    }

    componentWillReceiveProps(newProps) {
        const { match: { params: { category } } } = this.props
        const { match: { params } } = newProps
        if (params.category && category !== params.category) {
            this.props.fetchAllPostsByCategory(params.category)
        } else if (category && !params.category) {
            this.props.fetchAllPosts()
        }
    }

    openConfirmModal = (callback) => {
        this.setState({ showConfirmModal: true, handleRemove: callback })
    }

    handleRemovePost = (postId) => {
        this.openConfirmModal(() => {
            this.props
                .fetchRemovePost(postId)
                .then(() => this.closeConfirmModal)
        })
    }

    closeConfirmModal = () => {
        this.setState({ showConfirmModal: false })
    }

    switchPage = (pageNumber) => {
        const node = ReactDOM.findDOMNode(this.refs.postlist)
        window.scrollTo(0, node.offsetTop)
        this.setState(({ pagination }) => ({
            pagination: {
                ...pagination,
                activePage: pageNumber
            }
        }))
    }

    render() {
        const {
            posts,
            sort,
            sortOptions,
            categories,
            fetchVoting,
            setSort
        } = this.props
        const { handleRemove, showConfirmModal, pagination } = this.state
        const numPages = getNumPages(posts.length, pagination.perPage)
        const indexes = getIndexesPage(posts.length, pagination.activePage)
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
                <h2 ref="postlist" className="main-header">
                    Posts
                </h2>
                <div className="content">
                    <WrappedButton to="/new">New Post</WrappedButton>
                    <Select
                        value={sort.text}
                        options={sortOptions}
                        handle={setSort}
                        className="select-sort"
                    />
                    <PostsSummary
                        posts={posts.slice(indexes.first, indexes.last)}
                        updateVote={fetchVoting}
                        handleRemovePost={this.handleRemovePost}
                    />
                    <If condition={posts.length > 0}>
                        <Pagination
                            activePage={pagination.activePage}
                            items={numPages}
                            next={true}
                            prev={true}
                            onSelect={this.switchPage}
                        />
                    </If>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({
    sort,
    sortOptions,
    posts: { posts },
    categories: { categories }
}) => ({
    posts: posts.sort(sortBy(sort.post.key)),
    categories,
    sort: sort.post,
    sortOptions
})

const mapDispatchToProps = {
    fetchAllPosts,
    fetchAllPostsByCategory,
    fetchRemovePost,
    fetchVoting,
    fetchAllCategories,
    setSort: (sortBy) => setSort('post', sortBy)
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ListPost)
