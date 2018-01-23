import * as CategoriesAPI from '../api/CategoriesAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const fetchAllCategories = () => (dispatch) => {
	
	CategoriesAPI.getAll().then((categories) => {
		dispatch(getAllCategories(categories))
	})

}

const getAllCategories = ({ categories }) => ({
	type: GET_ALL_CATEGORIES,
	categories
})