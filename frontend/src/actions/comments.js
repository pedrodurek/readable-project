import * as CommentsAPI from '../api/CommentsAPI'

export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export const SORT_ALL_COMMENTS = 'SORT_ALL_COMMENTS'

export const fetchCommentsByPost = (postId) => (dispatch) => {

	CommentsAPI.getAllByPost(postId).then((comments) => {
		dispatch(getAllCommentsByPost(comments))
		dispatch(sortComments('-voteScore'))
	})

}

const getAllCommentsByPost = (comments) => ({
	type: GET_COMMENTS_BY_POST,
	comments
})

const sortComments = (sortBy) => ({
	type: SORT_ALL_COMMENTS,
	sortBy
})