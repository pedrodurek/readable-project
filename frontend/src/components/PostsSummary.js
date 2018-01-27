import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { If, Then, Else } from 'react-if'
import VoteOptions from './VoteOptions'

const PostsSummary = ({ posts, updateVote }) => (
    <If condition={posts.length > 0}>
        <Then>
            <ol>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div className="post-content">
                            <Link to={`/${post.category}/${post.id}`}>
                                <h2 className="post-title">{post.title}</h2>
                            </Link>
                            <div className="post-author">Author: {post.author}</div>
                            <div className="post-num-comments">Number of comments: {post.commentCount}</div>
                            <div className="post-vote-score">Score: {post.voteScore}</div>
                            <div className="post-category">Category: {post.category}</div>
                            <VoteOptions handle={(vote) => updateVote(post.id, vote)} />
                        </div>
                    </li>
                ))}
            </ol>
        </Then>
        <Else>
            <p>There is not any post for this category.</p>
        </Else>
    </If>
)

PostsSummary.propTypes = {
	posts: PropTypes.array.isRequired,
	updateVote: PropTypes.func.isRequired
}


export default PostsSummary
