import sortBy from 'sort-by'
import * as PostsAPI from './api/PostsAPI'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const SORT_ALL_POSTS = 'SORT_ALL_POSTS'

export const fetchAllPosts = (sortBy) => {

	PostsAPI.getAll().then((posts) => {

		dispatch(getAllPosts(posts))
		dispatch(sortPosts(sortBy))

	})

}

export const sortPosts = (sortBy) => ({
	type: SORT_ALL_POSTS,
	sortBy
})

const getAllPosts = (posts, sortBy) => ({
	type: GET_ALL_POSTS,
	posts
})