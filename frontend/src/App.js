import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import ListPosts from './views/ListPosts'
import ShowPost from './views/ShowPost'
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
                <Loading show={isFetching} fullScreen={true} />
                {/* <Header title="Readable" /> */}
                <div className="main-container">
                    <Switch>
                        <Route exact path="/" component={ListPosts} />
                        <Route exact path="/:category" component={ListPosts} />
                        <Route path="/post/new" component={CreatePost} />
                        <Route path="/post/:post_id" component={EditPost} />
                        <Route path="/:category/:post_id" component={ShowPost} />
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
