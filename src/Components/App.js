import React, {useState, useEffect} from 'react';
import {Registration} from './'

function App(){
    const [token, setToken]=useState('');
  //const tokenSave = (window.localStorage.getitem('token'));
function tokenCheck(){
  if (window.localStorage.getItem('token')){
    setToken(window.localStorage.getItem('token'));
}
}
useEffect(() => { //using useeffect and empty array to only run once.
    tokenCheck();
},[])
   
console.log('here is the token silly',token)

    return (
    <div>
       <Registration setToken={setToken}></Registration>
    </div>
    
        )
}

export default App;