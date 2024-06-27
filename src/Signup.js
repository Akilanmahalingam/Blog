import React, { useState } from 'react';

function Signup({ onSignupSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    if (username && password) {
      // Assume signup is always successful
      setMessage('Signup successful!');
      onSignupSuccess(username, password);
    } else {
      setMessage('Please enter both username and password.');
    }
  };

  return (
    <div className='Signup'>
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
