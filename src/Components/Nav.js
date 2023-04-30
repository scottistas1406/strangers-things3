import React from 'react';
import {Link} from 'react-router-dom';

function Nav({setToken, setIsLoggedIn, isLoggedIn}){

function logout(){

    setToken('');
    setIsLoggedIn(false);
window.localStorage.removeItem("token");

}

    return(
   <nav>
    <h1>Welcome To Strangers Things!</h1>
    {isLoggedIn ? (
                   
        <button onClick={logout}>LogOut</button>
            
             ) : (
            <>
            <button>
            <Link to='/login'>Login</Link>
            </button>
            <button>
            <Link to='/registration'>No Login Register here</Link>
            </button>
            </>
        )}
    </nav>
    );
}

export default Nav;