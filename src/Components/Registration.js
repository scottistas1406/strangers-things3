import React, { useState } from "react";
import { registerUser } from '../ajax-requests'
import '../styles/registration.css';

function Registration({ setToken, navigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const user = { username, password };

    const results = await registerUser(user);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label htmlFor="username-input">Create a Username:</label>
      <input
        id="username-input"
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password-input">Password:</label>
      <input
        id="password-input"
        type='password'
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Registration;
