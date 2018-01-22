import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from './views/Posts'
import Categories from './views/Categories'
import Post from './views/Post'
import CreatePost from './views/CreatePost'

class App extends Component {

    render() {
    
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/post/new" component={CreatePost} />
                    <Route exact path="/:category" component={Categories} />
                    <Route path="/:category/:post_id" component={Post} />
                </Switch>
            </div>
        )

    }

}


export default App
