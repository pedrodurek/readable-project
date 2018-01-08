import { GET_ALL_CATEGORIES } from '../actions/categories'

const categories = (state = [], action) => {

	switch (action.type) {
		case GET_ALL_CATEGORIES:
			return state.concat(action.categories)
		default:
			return state
	}

}

export default categories