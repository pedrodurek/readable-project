import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import PropTypes from 'prop-types'
import Select from './Select'

const PostForm = ({ handleSubmit, handleAddPost, categories }) => (
    <Form onSubmit={handleSubmit(handleAddPost)}>
        <label>Title</label>
        <div>
            <Field
                name="title"
                component="input"
                type="text" 
            />
        </div>
        <label>Body</label>
        <div>
            <Field
                name="body"
                component="input"
                type="text"
            />
        </div>
        <label>Author</label>
        <div>
            <Field
                name="author"
                component="input"
                type="text"
            />
        </div>
        <label>Category</label>
        <div>
            <Field
                name="category"
                component={props => (
                    <Select
                        currentSelected={props.value}
                        options={categories}
                    />
                )}
            />
        </div>
    </Form>
)

PostForm.propTypes = { 
}

PostForm.defaultProps = {
}

export default reduxForm({
    form: 'initializePostForm'
})(PostForm)