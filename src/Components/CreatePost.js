import React, {useState} from 'react';
import { makePost } from '../ajax-requests';
import { useAsyncValue } from 'react-router-dom';
import '../styles/createpost.css'; // <-- import the CSS file

function CreatePost({token, gatherPosts,navigate}){
    const [title, setTitle]=useState('');
    const [description, setdescrption]=useState('');
    const [price, setprice]=useState('');
    const [location, setlocation]=useState('');
    
    
   async function handleSubmit(event){
        event.preventDefault()
        const post={title,description,price}
        //console.log('whatcha got',title,description,price);
        const results= await makePost(post, token)
       // console.log('here are your results!',results)
        if (results.success){
            makePost();
            navigate('/');
        }

    }


    return(
       <form onSubmit={handleSubmit}>
        <input
       type='text'
       placeholder='Enter Things Title'
       value={title}
       onChange={()=> {setTitle(event.target.value)}}
       />
        <input
       type='text'
       placeholder='Enter Things Description'
       value={description}
       onChange={()=>{setdescrption(event.target.value)}}
       />
        <input
       type='text'
       placeholder='Enter Things Price'
       value={price}
       onChange={()=>{setprice(event.target.value)}}
       />
       <input
       type='text'
       placeholder='Enter your location.'
       value={location}
       onChange={()=>{setlocation(event.target.value)}}
       />
       <button type='submit'>Register Thing</button>

        </form>
    )
}

export default CreatePost;
