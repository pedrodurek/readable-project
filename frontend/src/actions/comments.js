import * as CommentsAPI from '../api/CommentsAPI'

export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export const SORT_ALL_COMMENTS = 'SORT_ALL_COMMENTS'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

export const fetchCommentsByPost = (postId) => (dispatch) => {

	CommentsAPI.getAllByPost(postId).then((comments) => {

		dispatch(getAllCommentsByPost(comments))
		dispatch(sortComments('-voteScore'))

	})

}

export const fetchAddComment = (data) => (dispatch) => {

	CommentsAPI.insert(data).then((comment) => {

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