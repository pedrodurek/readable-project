import {
	GET_COMMENTS_BY_POST,
	SORT_ALL_COMMENTS
} from '../actions/comments'
import sortBy from 'sort-by'

const comments = (state = [], action) => {

	switch (action.type) {
		case GET_COMMENTS_BY_POST:
			return action.comments
		case SORT_ALL_COMMENTS:
			let comments = [...state]
			return comments.sort(sortBy(action.sortBy))
		default:
			return state
	}

}

export default comments