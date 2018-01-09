import sortBy from 'sort-by'
import {
	GET_ALL_POSTS,
	UPDATE_POSTS, 
	SORT_ALL_POSTS,
	GET_POST_BY_ID
} from '../actions/posts'


const posts = (state = [], action) => {

	switch (action.type) {
		case GET_ALL_POSTS:
			return action.posts
		case UPDATE_POSTS:
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
		case GET_POST_BY_ID:
			console.log('Teste')
			return action.post
		default:
			return state
	}

}

export default posts