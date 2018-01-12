import React from 'react'
import { formatDate } from '../utils/helper'
import VoteOptions from '../components/VoteOptions'

const PostDetails = ({ post, updateVote }) => (
	<div>
        <div className="post-title">{post.title}</div>
        <div className="post-author">Author: {post.author}</div>
        <div className="post-author">Date: {formatDate(post.timestamp)}</div>
        <div className="post-num-comments">Number of comments: {post.commentCount}</div>
        <div className="post-vote-score">Score: {post.voteScore}</div>
        <div className="post-category">Category: {post.category}</div>
        <VoteOptions handler={(vote) =>  updateVote(post.id, vote)} />
	</div>
)

export default PostDetails