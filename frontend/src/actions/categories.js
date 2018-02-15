import { change } from 'redux-form'
import * as CategoriesAPI from '../api/CategoriesAPI'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const fetchAllCategories = () => (dispatch) => {
    dispatch(setIsFetching(true))
    CategoriesAPI.getAll().then((data) => {
        dispatch(getAllCategories(data))
        const { categories } = data
        dispatch(
            change(
                'initializePostForm',
                'category',
                categories.length > 0 ? categories[0].name : ''
            )
        )
    })
}

const setIsFetching = (isFetching) => ({
    type: REQUEST_CATEGORIES,
    isFetching
})

const getAllCategories = ({ categories }) => ({
    type: GET_ALL_CATEGORIES,
    categories,
    isFetching: false
})
