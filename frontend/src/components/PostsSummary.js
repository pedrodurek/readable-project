import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Label, Badge, Grid, Row, Col } from 'react-bootstrap'
import { If, Then, Else } from 'react-if'
import VoteOptions from './VoteOptions'
import '../styles/PostsSummary.css'

const PostsSummary = ({ posts, updateVote }) => (
    <div className="content">
        <If condition={posts.length > 0}>
            <Then>
                <Grid className="list-posts">
                    {posts.map((post) => (
                        <Row key={post.id}>
                            <Col md={6} mdPull={6}>
                                <Link to={`/${post.category}/${post.id}`}>
                                    <h3 className="post-title">{post.title}</h3>
                                </Link>
                                <p><Label>{post.category}</Label></p>
                                <p><span className="post-author">Created by <b>{post.author}</b></span></p>
                            </Col>
                            <Col md={6} mdPull={6}>
                                <p>Votes <Badge bsStyle="success">{post.voteScore}</Badge></p>
                                <p>Answers <Badge bsStyle="success">{post.commentCount}</Badge></p>
                                <VoteOptions handle={(vote) => updateVote(post.id, vote)} />
                            </Col>
                        </Row>
                    ))}
                </Grid>
            </Then>
            <Else>
                <p>There is not any post for this category.</p>
            </Else>
        </If>
    </div>
)

PostsSummary.propTypes = {
	posts: PropTypes.array.isRequired,
	updateVote: PropTypes.func.isRequired
}


export default PostsSummary
