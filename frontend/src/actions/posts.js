import * as PostsAPI from '../api/PostsAPI'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const UPDATE_POSTS = 'UPDATE_POSTS'
export const SORT_ALL_POSTS = 'SORT_ALL_POSTS'

export const fetchAllPosts = (sortBy) => (dispatch) => {

	PostsAPI.getAll().then((posts) => {

		dispatch(getAllPosts(posts))
		dispatch(sortPosts(sortBy))

	})

}

export const fetchAllPostsByCategory = (category, sortBy) => (dispatch) => {

	PostsAPI.getAllByCategory(category).then((posts) => {

		dispatch(getAllPosts(posts))
		dispatch(sortPosts(sortBy))

	})

}

export const sortPosts = (sortBy) => ({
	type: SORT_ALL_POSTS,
	sortBy
})

const getAllPosts = (posts) => ({
	type: GET_ALL_POSTS,
	posts
})

export const fetchVoting = (postId, vote, sortBy) => (dispatch) => {

	PostsAPI.voting(postId, vote).then((post) => {

		dispatch(updatePost(post))
		dispatch(sortPosts(sortBy))
		
	})

}

const updatePost = (post) => ({
	type: UPDATE_POSTS,
	post
})