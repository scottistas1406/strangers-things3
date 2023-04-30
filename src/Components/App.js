import React, {useState, useEffect, useReducer} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Registration,
     Posts,
     Login,
     CreatePost,
     Nav
    }
      from './'
import {fetchPosts,myData} from '../ajax-requests';


function App(){
    const [token, setToken]=useState('');
    const [posts,setPosts ]= useState([]);
    const [user, setUser]=useState({});
    const [isLoggedIn, setIsLoggedIn]=useState(false)



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

async function getMyData(){
    const results= await myData(token);
    if (results.success){
        setUser(results.data);

    }
}

useEffect(() => { //using useeffect and empty array to only run once.
    tokenCheck();

},[])

    useEffect(()=> {
    gatherPosts();
    if (token){
        getMyData();
        setIsLoggedIn(true);
    }
    },[token])
console.log(posts)
    

 return (
    <div>
        <Nav 
// *************Nav bar

        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}       
        >
           
        </Nav>


        <Routes>
        <Route
        path='/'
        element={<Posts posts={posts} ></Posts>}
        >            
        </Route>

        <Route
        path='/login'
        element={<Login setToken={setToken}></Login>}
        >            
        </Route>

        <Route 
          path='/registration' 
          element={<Registration setToken={setToken}></Registration>} >
        </Route>

        <Route
        path='/createpost'
        element={<CreatePost token={token} gatherPosts={gatherPosts}/>}>
        </Route>

      
       
    </Routes>
    </div>
    
        );
}

export default App;