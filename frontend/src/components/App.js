import React, { Component } from 'react'
import * as PostsAPI from '../api/PostsAPI'
import { Route } from 'react-router-dom'
import sortBy from 'sort-by'
import FaSortNumericAsc from 'react-icons/lib/fa/sort-numeric-asc'
import FaSortNumericDesc from 'react-icons/lib/fa/sort-numeric-desc'
import ListPosts from './ListPosts'


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
        
        PostsAPI.voting(postId, vote).then((p) => {
            this.setState(({ posts }) => ({
                posts: posts.filter((post) => post.id !== p.id).concat(p)
                    .sort(sortBy('-voteScore'))
            }))
        })

    }

    filterHandler = (sort) => {

        console.log(sort)
        this.setState(({ posts }) => ({
            posts: posts.sort(sortBy(sort))
        }))

    }

    render() {
        
        const { posts, filterOptions } = this.state
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

export default connect(mapStateToProps)(App)
