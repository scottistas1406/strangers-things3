import React, {useState} from 'react';
import {Registration} from './'

function App(){
    const [token, setToken]=useState('');

    console.log(token)
    return (
    <div>
       <Registration setToken={setToken}></Registration>
    </div>
    
        )
}

export default App;