import React, { Component } from 'react'
import * as PostsAPI from '../api/PostsAPI'

class App extends Component {

    componentDidMount() {
        PostsAPI.getAll().then((result) => {
            console.log(result)
        })
    }

    render() {

        return (
            <div></div>
        )

    }
}

export default App
