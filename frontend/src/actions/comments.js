import uuidv1 from 'uuid/v1'
import * as CommentsAPI from '../api/CommentsAPI'

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const RECEIVE_COMMENTS_BY_POST = 'RECEIVE_COMMENTS_BY_POST'
export const SORT_ALL_COMMENTS = 'SORT_ALL_COMMENTS'
export const RECEIVE_UPDATE_COMMENT = 'RECEIVE_UPDATE_COMMENT'
export const RECEIVE_ADD_COMMENT = 'RECEIVE_ADD_COMMENT'
export const RECEIVE_REMOVE_COMMENT = 'RECEIVE_REMOVE_COMMENT'

export const fetchCommentsByPost = (postId) => (dispatch) => {
	dispatch(setIsFetching(true))
	CommentsAPI.getAllByPost(postId).then((comments) => {
		dispatch(receiveCommentsByPost(comments))
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
	CommentsAPI.insert(newComment).then((comment) => {
		dispatch(receiveAddComment(comment))
		dispatch(sortComments('-voteScore'))
	})
}

export const fetchVoting = (commentId, vote) => (dispatch) => {
	CommentsAPI.voting(commentId, vote).then((comment) => {
		dispatch(receiveUpdateComment(comment))
		dispatch(sortComments('-voteScore'))
	})
}

export const fetchRemoveComment = (commentId) => (dispatch) => {
	CommentsAPI.del(commentId).then((comment) => {
		dispatch(receiveRemoveComment(commentId))
	})
}

const setIsFetching = (isFetching) => ({
	type: REQUEST_COMMENTS,
	isFetching
})

const receiveAddComment = (comment) => ({
	type: RECEIVE_ADD_COMMENT,
	comment,
	isFetching: false
})

const receiveCommentsByPost = (comments) => ({
	type: RECEIVE_COMMENTS_BY_POST,
	comments,
	isFetching: false
})

const sortComments = (sortBy) => ({
	type: SORT_ALL_COMMENTS,
	sortBy
})

const receiveUpdateComment = (comment) => ({
	type: RECEIVE_UPDATE_COMMENT,
	comment,
	isFetching: false
})

const receiveRemoveComment = (commentId) => ({
	type: RECEIVE_REMOVE_COMMENT,
	commentId,
	isFetching: false
})
