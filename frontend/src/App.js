import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import Posts from './views/Posts'
import Categories from './views/Categories'
import Post from './views/Post'
import CreatePost from './views/CreatePost'
import EditPost from './views/EditPost'
import Header from './components/Header'    
import Footer from './components/Footer'    
import Loading from './components/Loading'
import './App.css'

class App extends Component {

    render() {
    
        const { isFetching } = this.props
        return (
            <div className="app">
                {/* <Header title="Readable" /> */}
                <Loading show={isFetching} fullScreen={true} />
                <div className="main-container">
                    <Switch>
                        <Route exact path="/" component={Posts} />
                        <Route path="/post/new" component={CreatePost} />
                        <Route path="/post/:post_id" component={EditPost} />
                        <Route exact path="/:category" component={Categories} />
                        <Route path="/:category/:post_id" component={Post} />
                    </Switch>
                </div>
                <Footer content="© 2018 - Readable - Pedro Durek"/>
            </div>
        )

    }

}

const mapStateToProps = (state) => ({
    isFetching: state.categories.isFetching || 
        state.comments.isFetching || 
        state.posts.isFetching ||
        state.post.isFetching
})

export default withRouter(connect(mapStateToProps)(App))
