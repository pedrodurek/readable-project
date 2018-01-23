import React, {Component} from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import { fetchPostById, fetchEditPost } from '../actions/posts'
import { fetchAllCategories } from '../actions/categories'

class EditPost extends Component {

    componentDidMount() {

        const { post_id } = this.props.match.params
		this.props.fetchPostById(post_id)
        this.props.fetchAllCategories()

    }

    handleEditPost = (data) => {

        const { title, body } = data
        this.props.fetchEditPost(this.props.post.id, {
            title,
            body
        })
        
    }

    render() {

        const { post, categories } = this.props
        return (
            <div>
                <h2>Edit Post</h2>
                <PostForm
                    handlePost={this.handleEditPost}
                    categories={categories.map((category) => ({
                        text: category.name,
                        key: category.path
                    }))}
                    initialValues={post}
                    newPost={false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    post: state.post,
    categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
    fetchPostById: (id) => dispatch(fetchPostById(id)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchEditPost: (postId, data) => dispatch(fetchEditPost(postId, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)