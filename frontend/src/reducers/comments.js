import {
	GET_COMMENTS_BY_POST,
	SORT_ALL_COMMENTS,
	UPDATE_COMMENT,
	ADD_COMMENT
} from '../actions/comments'
import sortBy from 'sort-by'

const comments = (state = [], action) => {

	switch (action.type) {
		case GET_COMMENTS_BY_POST:
			return action.comments
		case SORT_ALL_COMMENTS:
			let comments = [...state]
			return comments.sort(sortBy(action.sortBy))
		case UPDATE_COMMENT:
			return state.filter((comment) => comment.id !== action.comment.id)
				.concat(action.comment)
		case ADD_COMMENT:
			return [...state, action.comment]
		default:
			return state
	}

}

export default comments