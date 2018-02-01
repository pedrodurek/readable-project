import React, {Component} from 'react'
import { change } from 'redux-form'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import { fetchAddPost } from '../actions/posts'
import { fetchAllCategories } from '../actions/categories'

class CreatePost extends Component {

    componentDidMount() {
        this.props.fetchAllCategories()
    }

    handleAddPost = (data) => {

        this.props.fetchAddPost(data, () => {
            this.props.history.push('/')
        })

    }

    render() {

        const { categories } = this.props
        return (
            <div>
                <h2>New Post</h2>
                <PostForm
                    handlePost={this.handleAddPost}
                    categories={categories.map((category) => ({
                        text: category.name,
                        key: category.path
                    }))}
                    initialValues={{category: ''}}
                    newPost={true}
                />
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
})

const mapDispatchToProps = (dispatch) => ({
    fetchAddPost: (post, callback) => dispatch(fetchAddPost(post, callback)),
    fetchAllCategories: () => dispatch(fetchAllCategories((category) => 
        dispatch(change('initializePostForm', 'category', category))
    )),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)