import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import Posts from './views/Posts'
import Categories from './views/Categories'
import Post from './views/Post'
import CreatePost from './views/CreatePost'
import EditPost from './views/EditPost'
import Loading from './components/Loading'
import './App.css'

class App extends Component {

    render() {
    
        const { isFetching } = this.props
        return (
            <div className="app">
                <Loading show={isFetching} fullScreen={true} />
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/post/new" component={CreatePost} />
                    <Route path="/post/:post_id" component={EditPost} />
                    <Route exact path="/:category" component={Categories} />
                    <Route path="/:category/:post_id" component={Post} />
                </Switch>
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    console.log(state)
    let x = {
        isFetching: state.categories.isFetching || 
            state.comments.isFetching || 
            state.posts.isFetching ||
            state.post.isFetching
    }
    console.log(x)
    return x
}

export default withRouter(connect(mapStateToProps)(App))
