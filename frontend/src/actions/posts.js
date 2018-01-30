import uuidv1 from 'uuid/v1'
import * as PostsAPI from '../api/PostsAPI'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const EDIT_POST =  'EDIT_POST'
export const SORT_ALL_POSTS = 'SORT_ALL_POSTS'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const SET_POST = 'SET_POST'

export const fetchAllPosts = (sortBy) => (dispatch) => {
	dispatch(setIsFetching(true))
	PostsAPI.getAll().then((posts) => {
		dispatch(getAllPosts(posts))
		dispatch(sortPosts(sortBy))
	})
}

export const fetchAllPostsByCategory = (category, sortBy) => (dispatch) => {
	dispatch(setIsFetching(true))
	PostsAPI.getAllByCategory(category).then((posts) => {
		dispatch(getAllPosts(posts))
		dispatch(sortPosts(sortBy))
	})
}

export const fetchPostById = (id) => (dispatch) => {
	dispatch(setIsFetching(true))
	PostsAPI.get(id).then((post) => {
		dispatch(getPostById(post))
	})
}

export const fetchVotingAndSort = (postId, vote, sortBy) => (dispatch) => {
	dispatch(setIsFetching(true))
	PostsAPI.voting(postId, vote).then((post) => {
		dispatch(editPost(post))
		dispatch(sortPosts(sortBy))
	})
}

export const fetchVoting = (postId, vote) => (dispatch) => {
	dispatch(setIsFetching(true))
	PostsAPI.voting(postId, vote).then((post) => {
		dispatch(editPost(post))
		dispatch(setPost(post))
	})
}

export const fetchAddPost = (data, callback) => (dispatch) => {
	const newPost = {
		id: uuidv1(),
		...data,
		timestamp: Date.now()
	}
	dispatch(setIsFetching(true))
	PostsAPI.insert(newPost).then((post) => {
		dispatch(setIsFetching(false))
		callback()
	})
}

export const fetchEditPost = (postId, data, callback) => (dispatch) => {
	const { title, body } = data
	dispatch(setIsFetching(true))
	PostsAPI.update(postId, { title, body }).then((post) => {
		dispatch(setIsFetching(false))
		callback()
	})
}

export const fetchRemovePost = (postId, callback) => (dispatch) => {
	dispatch(setIsFetching(true))
	PostsAPI.del(postId).then((post) => {
		dispatch(setIsFetching(false))
		callback()
	})
}

export const sortPosts = (sortBy) => ({
	type: SORT_ALL_POSTS,
	sortBy
})

export const setPost = (post) => ({
	type: SET_POST,
	post,
	isFetching: false
})

const setIsFetching = (isFetching) => ({
	type: REQUEST_POSTS,
	isFetching
})

const getAllPosts = (posts) => ({
	type: GET_ALL_POSTS,
	posts,
	isFetching: false
})

const getPostById = (post) => ({
	type: GET_POST_BY_ID,
	post,
	isFetching: false
})

const editPost = (post) => ({
	type: EDIT_POST,
	post
})
