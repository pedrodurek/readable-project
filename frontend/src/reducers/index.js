import { combineReducers } from 'redux'
import posts from './posts'
import sort from './sort'
import categories from './categories'
import sortOptions from './sort-options'


export default combineReducers({
	posts,
	sort,
	categories,
	sortOptions
})