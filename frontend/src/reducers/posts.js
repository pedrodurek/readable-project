import sortBy from 'sort-by'
import {
	GET_ALL_POSTS, 
	SORT_ALL_POSTS
} from './action/posts'


const posts = (state = [], action) => {

	switch (action.type) {
		case GET_ALL_POSTS:
			return action.posts
		case SORT_ALL_POSTS:

			let posts = [...state]
			return posts.sort(sortBy(action.sortBy))

		default:
			return state

	}

}