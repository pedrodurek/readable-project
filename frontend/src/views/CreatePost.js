import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import { fetchAddPost } from '../actions/posts'
import { fetchAllCategories } from '../actions/categories'

class CreatePost extends Component {
    componentDidMount() {
        this.props.fetchAllCategories()
        window.scrollTo(0, 0)
    }

    handleAddPost = (data) => {
        this.props.fetchAddPost(data).then(() => this.props.history.push('/'))
    }

    render() {
        const { categories } = this.props
        return (
            <div className="small-container">
                <h2 className="main-header">New Post</h2>
                <div className="content">
                    <PostForm
                        handlePost={this.handleAddPost}
                        categories={categories.map((category) => ({
                            text: category.name,
                            key: category.path
                        }))}
                        initialValues={{ category: '' }}
                        newPost={true}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
})

const mapDispatchToProps = {
    fetchAddPost,
    fetchAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
