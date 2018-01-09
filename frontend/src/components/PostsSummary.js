import React from 'react'
import { Link } from 'react-router-dom'
import FaSmileO from 'react-icons/lib/fa/smile-o'
import FaFrownO from 'react-icons/lib/fa/frown-o'
import { If, Then, Else } from 'react-if'

const PostsSummary = ({ posts, sort, updateVote }) => {
	return (
            <If condition={posts.length > 0}>
                <Then>
                    <ol>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <div className="post-content">
                                    <Link to={`/post/${post.id}`}>
                                        <h2 className="post-title">{post.title}</h2>
                                    </Link>
                                    <div className="post-author">Author: {post.author}</div>
                                    <div className="post-num-comments">Number of comments: {post.commentCount}</div>
                                    <div className="post-vote-score">Score: {post.voteScore}</div>
                                    <div className="post-category">Category: {post.category}</div>
                                    <div className="post-vote">
                                        <button onClick={() => updateVote(post.id, 'upVote', sort)} className="icon-btn">
                                            <FaSmileO size={20} />
                                        </button>
                                        <button onClick={() => updateVote(post.id, 'downVote', sort)} className="icon-btn">
                                            <FaFrownO size={20} />
                                        </button>                            
                                    </div>
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
}

export default PostsSummary
