import uuidv1 from 'uuid/v1'
import * as PostsAPI from '../api/PostsAPI'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_POST = 'REQUEST_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const EDIT_POST = 'EDIT_POST'
export const SORT_ALL_POSTS = 'SORT_ALL_POSTS'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const SET_POST = 'SET_POST'
export const REMOVE_POST = 'REMOVE_POST'

export const fetchAllPosts = (sortBy) => (dispatch) => {
    dispatch(setIsFetchingPosts(true))
    PostsAPI.getAll().then((posts) => {
        dispatch(getAllPosts(posts))
        dispatch(sortPosts(sortBy))
    })
}

export const fetchAllPostsByCategory = (category, sortBy) => (dispatch) => {
    dispatch(setIsFetchingPosts(true))
    PostsAPI.getAllByCategory(category).then((posts) => {
        dispatch(getAllPosts(posts))
        dispatch(sortPosts(sortBy))
    })
}

export const fetchPostById = (id) => (dispatch) => {
    dispatch(setIsFetchingPost(true))
    return PostsAPI.get(id).then((post) => {
        if (post.error) {
            dispatch(setIsFetchingPost(false))
            return Promise.reject()
        }
        dispatch(getPostById(post))
        return Promise.resolve()
    })
}

export const fetchVotingAndSort = (postId, vote, sortBy) => (dispatch) => {
    dispatch(setIsFetchingPosts(true))
    PostsAPI.voting(postId, vote).then((post) => {
        dispatch(editPost(post))
        dispatch(sortPosts(sortBy))
    })
}

export const fetchVoting = (postId, vote) => (dispatch) => {
    dispatch(setIsFetchingPost(true))
    PostsAPI.voting(postId, vote).then((post) => {
        dispatch(editPost(post))
        dispatch(setPost(post))
    })
}

export const fetchAddPost = (data) => (dispatch) => {
    const newPost = {
        ...data,
        id: uuidv1(),
        timestamp: Date.now()
    }
    dispatch(setIsFetchingPost(true))
    return PostsAPI.insert(newPost).then((post) => {
        dispatch(setIsFetchingPost(false))
        Promise.resolve()
    })
}

export const fetchEditPost = (postId, data) => (dispatch) => {
    const { title, body } = data
    dispatch(setIsFetchingPost(true))
    return PostsAPI.update(postId, { title, body }).then((post) => {
        dispatch(setIsFetchingPost(false))
        Promise.resolve()
    })
}

export const fetchRemovePost = (postId) => (dispatch) => {
    dispatch(setIsFetchingPosts(true))
    return PostsAPI.del(postId).then((post) => {
        dispatch(removePost(post))
        Promise.resolve()
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

const setIsFetchingPosts = (isFetching) => ({
    type: REQUEST_POSTS,
    isFetching
})

const setIsFetchingPost = (isFetching) => ({
    type: REQUEST_POST,
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
    post,
    isFetching: false
})

const removePost = (post) => ({
    type: REMOVE_POST,
    post,
    isFetching: false
})
