import uuidv1 from 'uuid/v1'
import * as CommentsAPI from '../api/CommentsAPI'

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export const SORT_ALL_COMMENTS = 'SORT_ALL_COMMENTS'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const fetchCommentsByPost = (postId) => (dispatch) => {
    dispatch(setIsFetching(true))
    CommentsAPI.getAllByPost(postId).then((comments) => {
        dispatch(getCommentsByPost(comments))
        dispatch(sortComments('-voteScore'))
    })
}

export const fetchAddComment = (postId, data) => (dispatch) => {
    const newComment = {
        id: uuidv1(),
        ...data,
        timestamp: Date.now(),
        parentId: postId
    }
    dispatch(setIsFetching(true))
    return CommentsAPI.insert(newComment).then((comment) => {
        dispatch(addComment(comment))
        dispatch(sortComments('-voteScore'))
        Promise.resolve()
    })
}

export const fetchEditComment = (commentId, data) => (dispatch) => {
    const { body } = data
    const editedComment = {
        body,
        timestamp: Date.now()
    }
    dispatch(setIsFetching(true))
    CommentsAPI.update(commentId, editedComment).then((comment) => {
        dispatch(editComment(comment))
        dispatch(sortComments('-voteScore'))
    })
}

export const fetchVoting = (commentId, vote) => (dispatch) => {
    dispatch(setIsFetching(true))
    CommentsAPI.voting(commentId, vote).then((comment) => {
        dispatch(editComment(comment))
        dispatch(sortComments('-voteScore'))
    })
}

export const fetchRemoveComment = (commentId) => (dispatch) => {
    dispatch(setIsFetching(true))
    return CommentsAPI.del(commentId).then((comment) => {
        dispatch(removeComment(commentId))
        Promise.resolve()
    })
}

const setIsFetching = (isFetching) => ({
    type: REQUEST_COMMENTS,
    isFetching
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment,
    isFetching: false
})

const getCommentsByPost = (comments) => ({
    type: GET_COMMENTS_BY_POST,
    comments,
    isFetching: false
})

const sortComments = (sortBy) => ({
    type: SORT_ALL_COMMENTS,
    sortBy
})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment,
    isFetching: false
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId,
    isFetching: false
})
