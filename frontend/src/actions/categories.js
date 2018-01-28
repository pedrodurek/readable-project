import * as CategoriesAPI from '../api/CategoriesAPI'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const fetchAllCategories = () => (dispatch) => {
	dispatch(setIsFetching(true))
	CategoriesAPI.getAll().then((categories) => {
		dispatch(receiveCategories(categories))
	})
}

const setIsFetching = (isFetching) => ({
	type: REQUEST_CATEGORIES,
	isFetching
})

const receiveCategories = ({ categories }) => ({
	type: RECEIVE_CATEGORIES,
	categories,
	isFetching: false
})
