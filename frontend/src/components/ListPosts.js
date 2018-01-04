import React from 'react'
import FaSmileO from 'react-icons/lib/fa/smile-o'
import FaFrownO from 'react-icons/lib/fa/frown-o'
import Filter from './Filter'

const ListPosts = ({ posts, filterOptions, filterHandler, updateVote }) => {

	return (
		<div>
            <Filter
                options={filterOptions}
                handler={filterHandler}
            />
            <ol>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div className="post-content">
                            <h2 className="post-title">{post.title}</h2>
                            <div className="post-author">Author: {post.author}</div>
                            <div className="post-num-comments">Number of comments: {post.commentCount}</div>
                            <div className="post-vote-score">Score: {post.voteScore}</div>
                            <div className="post-vote">
	                            <button onClick={() => updateVote(post.id, 'upVote')} className="icon-btn">
	                                <FaSmileO size={20} />
	                            </button>
								<button onClick={() => updateVote(post.id, 'downVote')} className="icon-btn">
                                	<FaFrownO size={20} />
								</button>                            
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
	)

}

export default ListPosts
