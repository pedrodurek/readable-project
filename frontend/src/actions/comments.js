import uuidv1 from 'uuid/v1'
import * as CommentsAPI from '../api/CommentsAPI'

export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export const SORT_ALL_COMMENTS = 'SORT_ALL_COMMENTS'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const fetchCommentsByPost = (postId) => (dispatch) => {

	CommentsAPI.getAllByPost(postId).then((comments) => {

		dispatch(getAllCommentsByPost(comments))
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

		dispatch(addComment(comment))
		dispatch(sortComments('-voteScore'))
		
	}).catch(() => {})
	
}

export const fetchVoting = (commentId, vote) => (dispatch) => {

	CommentsAPI.voting(commentId, vote).then((comment) => {

		dispatch(updateComment(comment))
		dispatch(sortComments('-voteScore'))
		
	})
	
}

export const fetchRemoveComment = (commentId) => (dispatch) => {
	
	CommentsAPI.del(commentId).then((comment) => {
		dispatch(removeComment(commentId))
	})

}

const addComment = (comment) => ({
	type: ADD_COMMENT,
	comment
})

const getAllCommentsByPost = (comments) => ({
	type: GET_COMMENTS_BY_POST,
	comments
})

const sortComments = (sortBy) => ({
	type: SORT_ALL_COMMENTS,
	sortBy
})


const updateComment = (comment) => ({
	type: UPDATE_COMMENT,
	comment
})

const removeComment = (commentId) => ({
	type: REMOVE_COMMENT,
	commentId
})
