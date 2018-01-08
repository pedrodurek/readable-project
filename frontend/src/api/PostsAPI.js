import { api, headers } from './UtilsAPI.js'

export const getAllByCategory = (category) => 
	fetch(`${api}/${category}/posts/`, {
		method: 'GET',
		headers
	}).then(res => res.json())
	.then(data => data)

export const getAll = () =>
	fetch(`${api}/posts`, {
		method: 'GET',
		headers
	}).then(res => res.json())
	.then(data => data)

export const get = (postId) =>
	fetch(`${api}/posts/${postId}`, {
		method: 'GET'
	}).then(res => res.json())
	.then(data => data)

export const insert = (post) =>
	fetch(`${api}/posts`, {
		method: 'POST',
		headers,
		body: JSON.stringify(post)
	}).then(res => res.json())

export const voting = (postId, option) =>
	fetch(`${api}/posts/${postId}`, {
		method: 'POST',
		headers,
		body: JSON.stringify({ option })
	}).then(res => res.json())
	.then(data => data)

export const update = (postId, post) =>
	fetch(`${api}/posts/${postId}`, {
		method: 'PUT',
		headers,
		body: JSON.stringify(post)
	}).then(res => res.json())
	.then(data => data)

export const del = (postId) =>
	fetch(`${api}/posts/${postId}`, {
		method: 'DELETE'
	}).then(res => res.json())

