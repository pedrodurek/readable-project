import sortBy from 'sort-by'
import {
	REQUEST_POSTS,
	GET_ALL_POSTS,
	EDIT_POST, 
	SORT_ALL_POSTS,
	GET_POST_BY_ID,
	SET_POST
} from '../actions/posts'

const initialState = {
	posts: [],
	isFetching: false
}

const posts = (state = initialState, action) => {

	switch (action.type) {
		case REQUEST_POSTS:
			return {
				...state,
				isFetching: action.isFetching
			}
		case GET_ALL_POSTS:
			return {
				posts: action.posts,
				isFetching: action.isFetching
			}
		case EDIT_POST:
			return {
				posts: state.posts.filter((post) => post.id !== action.post.id)
					.concat(action.post),
				isFetching: action.isFetching
			}
		case SORT_ALL_POSTS:
			let posts = [...state.posts]
			return {
				...state,
				posts: posts.sort(sortBy(action.sortBy.key))
			}
		default:
			return state
	}

}

const _initialState = {
	post: {},
	isFetching: false
}

export const post = (state = _initialState, action) => {

	switch (action.type) {
		case REQUEST_POSTS:
			return {
				...state,
				isFetching: action.isFetching
			}
		case SET_POST:
		case GET_POST_BY_ID:
			return {
				post: action.post,
				isFetching: action.isFetching
			}
		default:
			return state

	}

}

export default posts