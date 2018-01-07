import { api, headers } from './UtilsAPI.js'

export const getAll = () =>
	fetch(`${api}/categories`, {
		method: 'GET',
		headers
	}).then(res => res.json())
	.then(data => data)