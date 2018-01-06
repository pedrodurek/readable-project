import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import FaSortNumericAsc from 'react-icons/lib/fa/sort-numeric-asc'
import FaSortNumericDesc from 'react-icons/lib/fa/sort-numeric-desc'
import ListPosts from './ListPosts'
import { fetchAllPosts, fetchVoting, sortPosts } from '../actions/posts'


class App extends Component {
    

    state = {
        filterOptions: [{
            key: 'voteScore',
            icon: () => (<FaSortNumericAsc size={20} />),
            text: 'Score'
        }, {
            key: '-voteScore',
            icon: () => (<FaSortNumericDesc size={20} />),
            text: 'Score'
        }, {
            key: 'timestamp',
            icon: () => (<FaSortNumericAsc size={20} />),
            text: 'Date'
        }, {
            key: '-timestamp',
            icon: () => (<FaSortNumericDesc size={20} />),
            text: 'Date'
        }]
    }

    componentDidMount() {
        this.props.fetchAllPosts('-voteScore')
    }

    updateVote = (postId, vote) => {
        this.props.fetchVoting(postId, vote)
    }

    filterHandler = (sortBy) => {
        this.props.sortPosts(sortBy)
    }

    render() {
        
        const { filterOptions } = this.state
        const { posts } = this.props
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListPosts 
                        posts={posts} 
                        filterOptions={filterOptions}
                        filterHandler={this.filterHandler}
                        updateVote={this.updateVote} 
                    />
                )}/>
            </div>
        )

    }

}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPosts: (sortBy) => dispatch(fetchAllPosts(sortBy)),
    fetchVoting: (postId, vote) => dispatch(fetchVoting(postId, vote)),
    sortPosts: (sortBy) => dispatch(sortPosts(sortBy))

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
