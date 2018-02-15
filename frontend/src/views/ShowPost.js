import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Button, Pagination } from 'react-bootstrap'
import { submit } from 'redux-form'
import { If } from 'react-if'
import { getNumPages, getIndexesPage } from '../utils/helper'
import {
    fetchPostById,
    fetchRemovePost,
    fetchVoting as fetchVotingPost
} from '../actions/posts'
import {
    fetchCommentsByPost,
    fetchVoting as fetchVotingComment,
    fetchAddComment,
    fetchEditComment,
    fetchRemoveComment
} from '../actions/comments'
import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'
import SimpleModal from '../components/SimpleModal'
import ConfirmModal from '../components/ConfirmModal'
import CommentForm from '../components/CommentForm'

class ShowPost extends Component {
    state = {
        showSimpleModal: false,
        showConfirmModal: false,
        isCommentAction: false,
        comment: null,
        handleRemove: () => {},
        pagination: {
            activePage: 1,
            perPage: 5
        }
    }

    componentDidMount() {
        const { match: { params: { post_id } }, history } = this.props
        this.props.fetchPostById(post_id).catch(() => history.push('/404'))
        this.props.fetchCommentsByPost(post_id)
        window.scrollTo(0, 0)
    }

    openSimpleModal = () => {
        this.setState({ showSimpleModal: true })
    }

    closeSimpleModal = () => {
        this.setState({ showSimpleModal: false, comment: null })
    }

    openConfirmModal = (callback) => {
        this.setState({ showConfirmModal: true, handleRemove: callback })
    }

    closeConfirmModal = () => {
        this.setState({ showConfirmModal: false })
    }

    handleComment = (data) => {
        const { match, post } = this.props
        if (this.state.comment) {
            this.props.fetchEditComment(this.state.comment.id, data)
        } else {
            this.props
                .fetchAddComment(post.id, data)
                .then(() => this.props.fetchPostById(match.params.post_id))
        }
        this.closeSimpleModal()
    }

    handleEditComment = (commentId) => {
        this.setState({
            isCommentAction: true,
            showSimpleModal: true,
            comment: this.props.comments.find(
                (comment) => comment.id === commentId
            )
        })
    }

    handleRemovePost = (postId) => {
        this.setState({ isCommentAction: false })
        this.openConfirmModal(() => {
            this.props
                .fetchRemovePost(postId)
                .then(() => this.props.history.push('/'))
        })
    }

    handleRemoveComment = (commentId) => {
        this.setState({ isCommentAction: true })
        this.openConfirmModal(() => {
            this.props
                .fetchRemoveComment(commentId)
                .then(() =>
                    this.props.fetchPostById(this.props.match.params.post_id)
                )
            this.closeConfirmModal()
        })
    }

    switchPage = (pageNumber) => {
        const node = ReactDOM.findDOMNode(this.refs.commentlist)
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
            post,
            comments,
            fetchVotingPost,
            fetchVotingComment,
            submitComment
        } = this.props
        const {
            showSimpleModal,
            showConfirmModal,
            isCommentAction,
            comment,
            handleRemove,
            pagination
        } = this.state
        const numPages = getNumPages(comments.length, pagination.perPage)
        const indexes = getIndexesPage(comments.length, pagination.activePage)
        return (
            <div>
                <SimpleModal
                    showModal={showSimpleModal}
                    title={`${isCommentAction ? 'Edit' : 'Create'} Comment`}
                    confirmLabel={`${isCommentAction ? 'Save' : 'Create'}`}
                    onConfirm={submitComment}
                    onCancel={this.closeSimpleModal}
                >
                    <CommentForm
                        handleComment={this.handleComment}
                        initialValues={comment}
                        newComment={comment === null}
                    />
                </SimpleModal>
                <ConfirmModal
                    showModal={showConfirmModal}
                    title={`Remove ${isCommentAction ? 'Comment' : 'Post'}`}
                    message={`Are you sure do you want to remove this ${
                        isCommentAction ? 'comment' : 'post'
                    }?`}
                    onConfirm={handleRemove}
                    onCancel={this.closeConfirmModal}
                />
                <div className="list-row">
                    <h2 className="main-header">{post.title}</h2>
                    <PostDetails
                        post={post}
                        updateVote={fetchVotingPost}
                        handleRemovePost={this.handleRemovePost}
                        showBody={true}
                    >
                        <h5>{post.body}</h5>
                    </PostDetails>
                </div>
                <h2 ref="commentlist" className="main-header">
                    Comments
                </h2>
                <div className="content">
                    <Button bsStyle="primary" onClick={this.openSimpleModal}>
                        New Comment
                    </Button>
                    <CommentList
                        comments={comments.slice(indexes.first, indexes.last)}
                        updateVote={fetchVotingComment}
                        handleEditComment={this.handleEditComment}
                        handleRemoveComment={this.handleRemoveComment}
                    />
                    <If condition={comments.length > 0}>
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

const mapStateToProps = (state) => ({
    post: state.post.post,
    comments: state.comments.comments
})

const mapDispatchToProps = {
    fetchPostById,
    fetchVotingPost,
    fetchCommentsByPost,
    fetchVotingComment,
    submitComment: () => submit('initializeCommentForm'),
    fetchAddComment,
    fetchEditComment,
    fetchRemovePost,
    fetchRemoveComment
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)
