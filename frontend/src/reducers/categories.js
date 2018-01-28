import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/categories'

const initialState = {
	isFetching: false,
	categories: []
}

const categories = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_CATEGORIES:
			return {
				...state,
				isFetching: action.isFetching
			}
		case RECEIVE_CATEGORIES:
			return {
				categories: action.categories,
				isFetching: action.isFetching
			}
		default:
			return state
	}
}

export default categories
