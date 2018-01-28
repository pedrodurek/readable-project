import {
	REQUEST_COMMENTS,
	RECEIVE_COMMENTS_BY_POST,
	SORT_ALL_COMMENTS,
	RECEIVE_UPDATE_COMMENT,
	RECEIVE_ADD_COMMENT,
	RECEIVE_REMOVE_COMMENT
} from '../actions/comments'
import sortBy from 'sort-by'

const initialState = {
	isFetching: false,
	comments: []
}

const comments = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_COMMENTS:
			return {
				...state,
				isFetching: action.isFetching
			}
		case RECEIVE_COMMENTS_BY_POST:
			return {
				comments: action.comments,
				isFetching: action.isFetching
			}
		case SORT_ALL_COMMENTS:
			let comments = [...state.comments]
			return {
				comments: comments.sort(sortBy(action.sortBy)),
				...state
			}
		case RECEIVE_UPDATE_COMMENT:
			return {
				comments: state.comments
					.filter((comment) => comment.id !== action.comment.id)
					.concat(action.comment),
				isFetching: action.isFetching
			}
		case RECEIVE_ADD_COMMENT:
			return {
				comments: [...state.comments, action.comment],
				isFetching: action.isFetching
			}
		case RECEIVE_REMOVE_COMMENT:
			return {
				comments: state.comments.filter(
					(comment) => comment.id !== action.commentId
				),
				isFetching: action.isFetching
			}
		default:
			return state
	}
}

export default comments
