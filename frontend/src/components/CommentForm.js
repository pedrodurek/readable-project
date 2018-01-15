import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'

const CommentForm = ({ handleSubmit, handleComment }) => (
	<Form onSubmit={handleSubmit(handleComment)}>
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
	</Form>
)

export default reduxForm({
	form: 'initializeCommentForm',
	enableReinitialize: true
})(CommentForm)