import sortBy from 'sort-by'
import {
	GET_ALL_POSTS,
	UPDATE_POST, 
	SORT_ALL_POSTS,
	GET_POST_BY_ID,
	SET_POST
} from '../actions/posts'


const posts = (state = [], action) => {

	switch (action.type) {
		case GET_ALL_POSTS:
			return action.posts
		case UPDATE_POST:
			return state.filter((post) => post.id !== action.post.id)
				.concat(action.post)
		case SORT_ALL_POSTS:
			let posts = [...state]
			return posts.sort(sortBy(action.sortBy.key))
		default:
			return state
	}

}

export const post = (state = {}, action) => {

	switch (action.type) {
		case SET_POST:
		case GET_POST_BY_ID:
			return action.post
		default:
			return state

	}

}

export default posts