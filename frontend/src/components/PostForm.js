import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
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
            validate={[ required, minLength5 ]}
            type="text" 
        />
        <Field
            label="Body"
            name="body"
            component={InputValidation}
            validate={[ required, minLength5 ]}
            type="text"
        />
        <Field
            label="Author"
            name="author"
            component={InputValidation}
            validate={[ required, minLength5 ]}
            type="text"
            disabled={!newPost}
        />
        <label>Category</label>
        <div>
            <Field
                name="category"
                component={({ input }) => (
                    <Select
                        value={
                            input.value || 
                            ((categories.length > 0)?categories[0].text:'')
                        }
                        options={categories}
                        handle={(category) => input.onChange(category.text)}
                        disabled={!newPost}
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