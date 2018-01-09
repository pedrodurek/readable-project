import React from 'react'
import FaSmileO from 'react-icons/lib/fa/smile-o'
import FaFrownO from 'react-icons/lib/fa/frown-o'
import { formatDate } from '../utils/helper'

const PostDetails = ({ post, updateVote }) => (
	<div>
        <div className="post-title">{post.title}</div>
        <div className="post-author">Author: {post.author}</div>
        <div className="post-author">Date: {formatDate(post.timestamp)}</div>
        <div className="post-num-comments">Number of comments: {post.commentCount}</div>
        <div className="post-vote-score">Score: {post.voteScore}</div>
        <div className="post-category">Category: {post.category}</div>
        <div className="post-vote">
            <button onClick={() => updateVote(post.id, 'upVote')} className="icon-btn">
                <FaSmileO size={20} />
            </button>
            <button onClick={() => updateVote(post.id, 'downVote')} className="icon-btn">
                <FaFrownO size={20} />
            </button>                            
        </div>
	</div>
)

export default PostDetails