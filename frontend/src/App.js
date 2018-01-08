import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Posts from './views/Posts'
import Categories from './views/Categories'
import PostDetails from './views/PostDetails'

class App extends Component {

    render() {
    
        return (
            <div className="app">
                <Route exact path="/" component={Posts} />
                <Route exact path="/posts/:category" component={Categories} />
                <Route path="/post/:id" component={PostDetails} />
            </div>
        )

    }

}


export default App
