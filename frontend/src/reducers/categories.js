import { REQUEST_CATEGORIES, GET_ALL_CATEGORIES } from '../actions/categories'

const initialState = {
    categories: [],
    isFetching: false
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case GET_ALL_CATEGORIES:
            return {
                categories: action.categories,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export default categories
