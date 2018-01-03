import React, { Component } from 'react'
import * as PostsAPI from '../api/PostsAPI'
import ListPosts from './ListPosts'
import { Route } from 'react-router-dom'

class App extends Component {

    state = {
        posts: []
    }

    componentDidMount() {

        PostsAPI.getAll().then((posts) => {
            this.setState({ posts })
        })

    }

    updateVote = (postId, vote) => {
        
        const { posts } = this.state
        PostsAPI.voting(postId, vote).then((p) => {
            this.setState({
                posts: posts.filter((post) => post.id !== p.id).concat(p)
            })
        })

    }

    render() {
        
        const { posts } = this.state
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListPosts posts={posts} updateVote={this.updateVote} />
                )}/>
            </div>
        )

    }
}

export default App
