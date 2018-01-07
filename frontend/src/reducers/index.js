import { combineReducers } from 'redux'
import posts from './posts'
import sort from './sort'
import categories from './categories'


export default combineReducers({
	posts,
	sort,
	categories
})