import React, { useState } from 'react';

function Login({ onLogin, users }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (username && password) {
      if (users.has(username) && users.get(username).password === password) {
        setMessage('Login successful!');
        onLogin(true);

        // Push login event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'login',
          'userId': username
        });
      } else {
        setMessage('Invalid username or password.');
        onLogin(false);
      }
    } else {
      setMessage('Please enter both username and password.');
    }
  };

  return (
    <div className='Login'>
      <h2>Login</h2>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
