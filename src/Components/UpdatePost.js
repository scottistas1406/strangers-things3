import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost } from '../ajax-requests';


function UpdatePost({ posts, token, getPosts }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log("params 'id' value: ", postId);
  const [post] = posts.filter((post) => post._id === postId );
  
  const { title, description, price, location, willDeliver } = post ? post : {};
  
  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);
  const [updatedPrice, setPrice] = useState(price);
  const [updatedLocation, setLocation] = useState(location);
  const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);
  const [errorMessage, setErrorMessage] = useState('');
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const updatedPost = {
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice,
      location: updatedLocation,
     
    }
    
    const results = await updatePost(postId, token, updatedPost);

    console.log('here is the postID',postId)
    if (results.success) {
      getPosts();
      navigate('/');
    } else {
      setErrorMessage(results.error.message)
    }
  }
  
  
  return (
    <>
      {post ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={updatedTitle}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
              type="text"
              value={updatedDescription}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <input
              type="text"
              value={updatedPrice}
              onChange={(ev) => setPrice(ev.target.value)}
            />
            <input
              type="text"
              value={updatedLocation}
              onChange={(ev) => setLocation(ev.target.value)}
            />
            <input
              type="checkbox"
              checked={updatedWillDeliver}
              onChange={() => setWillDeliver(!updatedWillDeliver)}
            />
            <button type='submit'>Save Changes</button>
          </form>
          {
            errorMessage && <p>{errorMessage}</p>
          }
        </>
      ) : (
        //<h1>Sorry Post not here.</h1>
       <p></p>
      )}
    </>
  );
}

export default UpdatePost;