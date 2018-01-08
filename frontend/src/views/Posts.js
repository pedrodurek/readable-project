import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaSmileO from 'react-icons/lib/fa/smile-o'
import FaFrownO from 'react-icons/lib/fa/frown-o'
import Select from '../components/Select'
import { fetchAllPosts, fetchVoting, sortPosts } from '../actions/posts'
import { setSort } from '../actions/sort'
import { fetchAllCategories } from '../actions/categories'
import ShowCategories from '../components/ShowCategories'

class Posts extends Component {

    state = {
        sortOptions: [{
            key: 'voteScore',
            text: 'Vote - Low to High'
        }, {
            key: '-voteScore',
            text: 'Vote - Hight to Low'
        }, {
            key: 'timestamp',
            text: 'Date - Oldest to Newest'
        }, {
            key: '-timestamp',
            text: 'Date - Newest to Oldest'
        }]
    }
    componentDidMount() {
        this.props.fetchAllPosts(this.props.sort)
        this.props.fetchAllCategories()

    }

    updateVote = (postId, vote) => {
        this.props.fetchVoting(postId, vote, this.props.sort)
    }

    sortHandler = (sortBy) => {
        this.props.sortPosts(sortBy)
    }

    filterByCategory() {

    }

    render() {

        const { posts, sort, categories } = this.props
        const { sortOptions } = this.state
        return (
            <div>
                <ShowCategories categories={categories} />
                <Select
                    currentSelected={sort.text}
                    options={sortOptions}
                    handler={this.sortHandler}
                />
                <ol>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <div className="post-content">
                                <h2 className="post-title">{post.title}</h2>
                                <div className="post-author">Author: {post.author}</div>
                                <div className="post-num-comments">Number of comments: {post.commentCount}</div>
                                <div className="post-vote-score">Score: {post.voteScore}</div>
                                <div className="post-category">Category: {post.category}</div>
                                <div className="post-vote">
                                    <button onClick={() => this.updateVote(post.id, 'upVote')} className="icon-btn">
                                        <FaSmileO size={20} />
                                    </button>
                                    <button onClick={() => this.updateVote(post.id, 'downVote')} className="icon-btn">
                                        <FaFrownO size={20} />
                                    </button>                            
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    categories: state.categories,
    sort: state.sort.post
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPosts: (sortBy) => dispatch(fetchAllPosts(sortBy)),
    fetchVoting: (postId, vote, sortBy) => dispatch(fetchVoting(postId, vote, sortBy)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    sortPosts: (sortBy) => { 
        dispatch(setSort('post', sortBy))
        dispatch(sortPosts(sortBy))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
