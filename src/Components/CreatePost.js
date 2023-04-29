import React, {useState} from 'react';
import { makePost } from '../ajax-requests';

import { useAsyncValue } from 'react-router-dom';

function CreatePost({token, gatherPosts}){
    const [title, setTitle]=useState('');
    const [description, setdescrption]=useState('');
    const [price, setprice]=useState('');
    
    
   async function handleSubmit(evnet){
        event.preventDefault()
        const post={title,description,price}
        //console.log('whatcha got',title,description,price);
        const results= await makePost(post, token)
        console.log(results)
        if (results.success){
            gatherPosts();
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
       <button type='submit'>Register Thing</button>

        </form>
    )
}

export default CreatePost;
