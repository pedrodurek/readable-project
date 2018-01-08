import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Posts from './views/Posts'
import Categories from './views/Categories'


class App extends Component {

    render() {
    
        return (
            <div className="app">
                <Route exact path="/" component={Posts} />
                <Route path="/:category/posts" component={Categories} />
            </div>
        )

    }

}


export default App
