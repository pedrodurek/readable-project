import React from 'react';
import FaSmileO from 'react-icons/lib/fa/smile-o'
import FaFrownO from 'react-icons/lib/fa/frown-o'

const PostsSummary = ({ posts, sort, updateVote }) => {
	return (
		<ol>
            {posts.map((post) => (
                <li key={post.id}>
                    <div className="post-content">
                        <h2 className="post-title">{post.title}</h2>
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
	)
}

export default PostsSummary