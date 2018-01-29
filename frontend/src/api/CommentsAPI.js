import { api, headers } from './UtilsAPI.js'

export const getAllByPost = (postId) => 
	fetch(`${api}/posts/${postId}/comments`, {
		method: 'GET',
		headers
	}).then(res => res.json())
	.then(data => data)

export const getAll = () =>
	fetch(`${api}/comments`, {
		method: 'GET'
	}).then(res => res.json())
	.then(data => data)

export const get = (commentId) =>
	fetch(`${api}/comments/${commentId}`, {
		method: 'GET'
	}).then(res => res.json())
	.then(data => data)

export const insert = (comment) =>
	fetch(`${api}/comments`, {
		method: 'POST',
		headers,
		body: JSON.stringify(comment)
	}).then(res => res.json())

export const voting = (commentId, option) =>
	fetch(`${api}/comments/${commentId}`, {
		method: 'POST',
		headers,
		body: JSON.stringify({ option })
	}).then(res => res.json())
	.then(data => data)

export const update = (commentId, comment) =>
	fetch(`${api}/comments/${commentId}`, {
		method: 'PUT',
		headers,
		body: JSON.stringify(comment)
	}).then(res => res.json())
	.then(data => data)

export const del = (commentId) =>
	fetch(`${api}/comments/${commentId}`, {
		method: 'DELETE',
		headers
	}).then(res => res.json())

