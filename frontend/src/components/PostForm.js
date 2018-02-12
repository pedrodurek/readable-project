import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Select from './Select'
import InputValidation from './InputValidation'
import { required, minLength5 } from '../utils/helper'

const PostForm = ({ handleSubmit, handlePost, categories, newPost }) => (
    <Form onSubmit={handleSubmit(handlePost)}>
        <Field
            label="Title"
            name="title"
            component={InputValidation}
            validate={[required, minLength5]}
            type="text"
        />
        <Field
            label="Body"
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
            disabled={!newPost}
        />
        <label>Category</label>
        <div className="form-group">
            <Field
                name="category"
                component={({ input }) => (
                    <Select
                        value={input.value}
                        options={categories}
                        handle={(category) => input.onChange(category.text)}
                        disabled={!newPost}
                        className="select"
                    />
                )}
            />
        </div>
        <Button bsStyle="primary" type="submit">
            {(newPost && 'Create Post') || 'Save Post'}
        </Button>
    </Form>
)

PostForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handlePost: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    newPost: PropTypes.bool.isRequired
}

export default reduxForm({
    form: 'initializePostForm',
    enableReinitialize: true
})(PostForm)
