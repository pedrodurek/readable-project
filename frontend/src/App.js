import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Posts from './views/Posts'
import Categories from './views/Categories'
import Post from './views/Post'

class App extends Component {

    render() {
    
        return (
            <div className="app">
                <Route exact path="/" component={Posts} />
                <Route exact path="/:category" component={Categories} />
                <Route path="/post/:id" component={Post} />
            </div>
        )

    }

}


export default App
