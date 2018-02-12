import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import PropTypes from 'prop-types'
import InputValidation from './InputValidation'
import { required, minLength5 } from '../utils/helper'

const CommentForm = ({ handleSubmit, handleComment, newComment }) => (
    <Form onSubmit={handleSubmit(handleComment)}>
        <Field
            label="Comment"
            name="body"
            component={InputValidation}
            validate={[required, minLength5]}
            type="text"
        />
        <Field
            label="Author"
            name="author"
            component={InputValidation}
            validate={[required, minLength5]}
            type="text"
            disabled={!newComment}
        />
    </Form>
)

CommentForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleComment: PropTypes.func.isRequired,
    newComment: PropTypes.bool.isRequired
}

CommentForm.defaultProps = {
    newComment: false
}

export default reduxForm({
    form: 'initializeCommentForm',
    enableReinitialize: true
})(CommentForm)
