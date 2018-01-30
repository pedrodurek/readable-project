import {
	REQUEST_COMMENTS,
	GET_COMMENTS_BY_POST,
	SORT_ALL_COMMENTS,
	EDIT_COMMENT,
	ADD_COMMENT,
	REMOVE_COMMENT
} from '../actions/comments'
import sortBy from 'sort-by'

const initialState = {
	comments: [],
	isFetching: false
}

const comments = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_COMMENTS:
			return {
				...state,
				isFetching: action.isFetching
			}
		case GET_COMMENTS_BY_POST:
			return {
				comments: action.comments,
				isFetching: action.isFetching
			}
		case SORT_ALL_COMMENTS:
			let comments = [...state.comments]
			return {
				...state,
				comments: comments.sort(sortBy(action.sortBy))
			}
		case EDIT_COMMENT:
			return {
				comments: state.comments
					.filter((comment) => comment.id !== action.comment.id)
					.concat(action.comment),
				isFetching: action.isFetching
			}
		case ADD_COMMENT:
			return {
				comments: [...state.comments, action.comment],
				isFetching: action.isFetching
			}
		case REMOVE_COMMENT:
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
