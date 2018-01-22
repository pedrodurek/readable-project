import React, {Component} from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import { fetchAddPost } from '../actions/posts'
import { fetchAllCategories } from '../actions/categories'
import uuidv1 from 'uuid/v1'

class CreatePost extends Component {

    componentDidMount() {
        this.props.fetchAllCategories()
    }

    handlePost = (data) => {

        this.props.fetchAddPost({
            id: uuidv1(),
            ...data,
            timestamp: Date.now()
        })

    }

    render() {

        const { categories } = this.props
        return (
            <div>
                <h2>New Post</h2>
                <PostForm
                    handleAddPost={this.handlePost}
                    categories={categories.map((category) => ({
                        text: category.name,
                        key: category.path
                    }))}
                />
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
    fetchAddPost: (post) => dispatch(fetchAddPost(post)),
    fetchAllCategories: () => dispatch(fetchAllCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)