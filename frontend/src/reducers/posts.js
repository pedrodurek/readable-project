import sortBy from 'sort-by'
import {
	GET_ALL_POSTS,
	UPDATE_POSTS, 
	SORT_ALL_POSTS
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

export default posts