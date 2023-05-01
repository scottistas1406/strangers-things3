import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/posts.css';

function Posts({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Logic for displaying posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); //create pagnation thanks google!

  // Logic for displaying page numbers
  const pageNumbers = [];
  <p>Go To Page</p>
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {currentPosts.map((post) => ( 
        <div key={post._id} className="post-wrapper">
          <div className="post-title">{post.title}</div>
          <div className="post-description">{post.description}</div>
          <div className="post-description-price">{post.price}</div>
          <div className='post-description-price'>{post._id}</div>
          <div className="post-info">

            {post.isAuthor ? (
              <>
                <span>Posted by: {post.author.username}</span>
                <button>Delete</button>
             <Link to={`/updatepost/${post._Id}`} ><button>Edit Post</button></Link>
              </>
            ) : (
              <>
                <span>Posted by: {post.author.username}</span>
                <span>Location: {post.location}</span>
                <button>Message Owner</button>
              </>
            )}
          </div>
        </div>
      ))}
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default Posts;
