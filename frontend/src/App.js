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
import BreadcrumpItem from './components/BreadcrumpItem'
import { Breadcrumb } from 'react-bootstrap'
import './App.css'

class App extends Component {
	state = {
		routes: [
			{
				path: '/',
				exact: true,
				component: ListPosts,
				title: 'home'
			},
			{
				path: '/new',
				exact: false,
				component: CreatePost,
				title: 'new'
			},
			{
				path: '/:category',
				exact: true,
				component: ListPosts,
				title: ''
			},
			{
				path: '/:category/:post_id',
				exact: true,
				component: ShowPost,
				title: 'post'
			},
			{
				path: '/:category/:post_id/edit',
				exact: false,
				component: EditPost,
				title: 'edit'
			}
		]
	}

	render() {
		const { isFetching } = this.props
		const { routes } = this.state
		return (
			<div className="app">
				<Loading show={isFetching} fullScreen={true} />
				<Header title="Readable" />
                <Breadcrumb>
                    {routes.map((route, i) => (
                        <Route
                            key={i}
                            path={route.path}
                            render={(props) => (
                                <BreadcrumpItem
                                    {...props}
                                    title={route.title}
                                />
                            )}
                        />
                    ))}
                </Breadcrumb>
				<div className="main-container">
					<Switch>
						{routes.map((route, i) => (
							<Route key={i} {...route} />
						))}
					</Switch>
				</div>
				<Footer content="© 2018 - Readable - Pedro Durek" />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isFetching:
		state.categories.isFetching ||
		state.comments.isFetching ||
		state.posts.isFetching ||
		state.post.isFetching
})

export default withRouter(connect(mapStateToProps)(App))
