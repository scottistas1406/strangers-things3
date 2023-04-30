import React, {useState, useEffect, useReducer} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Registration,
     Posts,
     Login,
     CreatePost,
     Nav
    }
      from './'
import {fetchPosts,myData} from '../ajax-requests';
//import { UserContext } from '../contexts/UserContext';

function App(){
    const [token, setToken]=useState('');
    const [posts,setPosts ]= useState([]);
    const [user, setUser]=useState({});
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    const navigate=useNavigate();
   // const { user: currentUser } = useContext(UserContext);

//console.log('$$$',currentUser);
  //const tokenSave = (window.localStorage.getitem('token'));
function tokenCheck(){
  if (window.localStorage.getItem('token')){
    setToken(window.localStorage.getItem('token'));
}
}
async function getPosts(){
    const results = await fetchPosts(token);
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
    getPosts();
    if (token){
        getMyData();
        setIsLoggedIn(true);
        console.log('here is yourtoken',token);
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
        navigate={navigate}  
        >
           
        </Nav>


        <Routes>
        <Route
        path='/'
        element={<Posts posts={posts} user={user} ></Posts>}
        >            
        </Route>

        <Route
        path='/login'
        element={<Login setToken={setToken} navigate={navigate}></Login>}
        >            
        </Route>

        <Route 
          path='/registration' 
          element={<Registration setToken={setToken} navigate={navigate}></Registration>} >
        </Route>

        <Route
        path='/createpost'
        element={<CreatePost token={token} getPosts={getPosts} navigate={navigate}/>}>
        </Route>

      
       
    </Routes>
    </div>
    
        );
}

export default App;