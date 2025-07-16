import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { login, loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const registered = JSON.parse(localStorage.getItem('registeredUser'));
    if (registered && registered.email === email && registered.password === password) {
      login(registered); 
      navigate('/');     
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={loginAsGuest}>Continue as Guest</button>

      <p style={{ marginTop: '15px' }}>
  Don’t have an account?{' '}
  <span
    onClick={() => navigate('/register')}
    style={{ color: '#2f855a', cursor: 'pointer', fontWeight: 'bold' }}
  >
    Register here
  </span>
</p>

    </div>
  );
};

export default Login;
