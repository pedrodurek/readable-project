import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import PropTypes from 'prop-types'
import Select from './Select'

const PostForm = ({ handleSubmit, handlePost, categories, newPost }) => (
    <Form onSubmit={handleSubmit(handlePost)}>
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
                disabled={!newPost}
            />
        </div>
        <label>Category</label>
        <div>
            <Field
                name="category"
                disabled={!newPost}
                component={({ input }) => (
                    <Select
                        currentSelected={
                            input.value || 
                            ((categories.length > 0)?categories[0].text:'')
                        }
                        options={categories}
                        handle={(category) => input.onChange(category.text)}
                    />
                )}
            />
        </div>
        <button type="submit">{newPost?'Create':'Save'}</button>
    </Form>
)

PostForm.propTypes = { 
}

PostForm.defaultProps = {
}

export default reduxForm({
    form: 'initializePostForm',
    enableReinitialize: true
})(PostForm)