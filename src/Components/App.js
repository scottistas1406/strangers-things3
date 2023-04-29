import React, {useState, useEffect, useReducer} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Registration,
     Posts,
    }
      from './'
import {fetchPosts} from '../ajax-requests';


function App(){
    const [token, setToken]=useState('');
    const [posts,setPosts ]= useState([]);
  //const tokenSave = (window.localStorage.getitem('token'));
function tokenCheck(){
  if (window.localStorage.getItem('token')){
    setToken(window.localStorage.getItem('token'));
}
}
async function gatherPosts(){
    const results = await fetchPosts()
    if(results.success){
        setPosts(results.data.posts)
    }
}

useEffect(() => { //using useeffect and empty array to only run once.
    tokenCheck();

},[])

useEffect(()=> {
gatherPosts();
},[token])
console.log(posts)
   
console.log('here is the token silly',token)

    return (
    <div>
        <Routes>
        <Route
        path='/'
        element={<Posts posts={posts} ></Posts>}
        >            
        </Route>

        <Route 
          path='/registration' 
          element={<Registration setToken={setToken}></Registration>} >
        </Route>
       </Routes>
    </div>
    
        );
}

export default App;