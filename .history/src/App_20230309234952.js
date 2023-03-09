import React, { useState } from 'react';
import './login.css'; // Import the CSS file

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // send form data to server for authentication
    
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Log In</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Log In</button>
      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>
    </form>
  );
}

export default LoginForm;
