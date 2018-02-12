import { SET_SORT } from '../actions/sort'

const initialState = {
    post: {
        key: '-voteScore',
        text: 'Vote - Hight to Low'
    },
    comment: {}
}

const sort = (state = initialState, action) => {
    const { type, sortType, sortBy } = action
    switch (type) {
        case SET_SORT:
            return {
                ...state,
                [sortType]: sortBy
            }
        default:
            return state
    }
}

export default sort
