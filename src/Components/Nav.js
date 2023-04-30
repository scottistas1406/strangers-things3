import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navigation.css';

function Nav({ setToken, setIsLoggedIn, isLoggedIn }) {
  const navigate = useNavigate();

  function logout() {
    setToken('');
    setIsLoggedIn(false);
    window.localStorage.removeItem('token');
    navigate('/');
  }

  function handleCreatePostClick() {
    navigate('/createpost');
  }

  function handleViewAllPostsClick() {
    navigate('/');
  }

  return (
    <nav>
      <h1 className="nav-title">Welcome To Strangers Things!</h1>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="nav-menu">
        {isLoggedIn ? (
          <>
            <p className="nav-login-cofirm">You are currently logged in you can post a new thing.</p>
            <button className='nav-button' onClick={handleCreatePostClick}>
              Create a Thing
            </button>
            <button className="nav-button" onClick={handleViewAllPostsClick}>
              View All Posts
            </button>
            <button className="nav-button" onClick={logout}>
              LogOut
            </button>
          </>
        ) : (
          <>
            <button className="nav-button" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="nav-button" onClick={() => navigate('/registration')}>
              Need a Login Register here
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;

