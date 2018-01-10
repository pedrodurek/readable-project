import { combineReducers } from 'redux'
import posts, { post } from './posts'
import sort from './sort'
import categories from './categories'
import sortOptions from './sort-options'
import comments from './comments'


export default combineReducers({
	posts,
	post,
	sort,
	categories,
	sortOptions,
	comments
})