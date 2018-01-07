import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Posts from '../views/Posts'


class App extends Component {

    render() {
    
        return (
            <div className="app">
                <Route exact path="/" component={Posts} />
            </div>
        )

    }

}


export default App
