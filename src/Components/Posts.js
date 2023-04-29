import React from "react";

function Post({posts}){

    return(
        <>
       { 
        posts && posts.map((post)=> {
           
            return (
           
            <p key={post._id}>Title: {post.title} </p>
           
            )
        })
    }
        </>
     );
}

export default Post;