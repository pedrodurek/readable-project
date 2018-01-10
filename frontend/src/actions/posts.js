import * as PostsAPI from '../api/PostsAPI'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const UPDATE_POST = 'UPDATE_POST'
export const SORT_ALL_POSTS = 'SORT_ALL_POSTS'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const SET_POST = 'SET_POST'

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

export const fetchPostById = (id) => (dispatch) => {

	PostsAPI.get(id).then((post) => {
		dispatch(getPostById(post))
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

const getPostById = (post) => ({
	type: GET_POST_BY_ID,
	post
})

export const fetchVotingAndSort = (postId, vote, sortBy) => (dispatch) => {

	PostsAPI.voting(postId, vote).then((post) => {

		dispatch(updatePost(post))
		dispatch(sortPosts(sortBy))

	})

}

export const fetchVoting = (postId, vote) => (dispatch) => {

	PostsAPI.voting(postId, vote).then((post) => {

		dispatch(updatePost(post))
		dispatch(setPost(post))

	})

}

const updatePost = (post) => ({
	type: UPDATE_POST,
	post
})

export const setPost = (post) => ({
	type: SET_POST,
	post	
})