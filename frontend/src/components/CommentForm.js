import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import PropTypes from 'prop-types'
import InputValidation from './InputValidation'
import { required, minLength5 } from '../utils/helper'

const CommentForm = ({ handleSubmit, handleComment }) => (
	<Form onSubmit={handleSubmit(handleComment)}>
		<Field
			label="Author"
			name="author"
			component={InputValidation}
			validate={[ required, minLength5 ]}
			type="text"
		/>
		<Field
			label="Comment"
			name="body"
			component={InputValidation}
			validate={[ required, minLength5 ]}
			type="text"
		/>
	</Form>
)

CommentForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	handleComment: PropTypes.func.isRequired
}

export default reduxForm({
	form: 'initializeCommentForm',
	enableReinitialize: true
})(CommentForm)