import React, {useState} from "react";

function Registration(){
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    console.log(username,password)

    
    return(
       <form>
       <input
        type='text'
        placeholder='Enter Username'
        onChange={(event)=> setUsername(event.target.value)}
/>
<input
type='password'
placeholder="Enter Password"
onChange={(event)=> setPassword(event.target.value)}
/>
<button
type='submit'> Login </button>
        </form>
    )
    }
    export default Registration;
