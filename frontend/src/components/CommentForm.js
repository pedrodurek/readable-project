import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CommentForm = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit}>
		<label>Author</label>
		<div>
			<Field
				name="author"
				component="input"
				type="text"
			/>
		</div>
		<label>Comment</label>
		<div>
			<Field
				name="body"
				component="input"
				type="text"
			/>
		</div>
	</form>
)

export default reduxForm({
	form: 'initializeCommentForm'
})(CommentForm)