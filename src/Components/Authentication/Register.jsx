import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const newUser = { name, email, password };

    // Save to localStorage
    localStorage.setItem('registeredUser', JSON.stringify(newUser));

    alert("Registration successful! Please log in.");
    navigate('/login'); // Go to login page
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>

      <p style={{ marginTop: '15px' }}>
  Already have an account?{' '}
  <span
    onClick={() => navigate('/login')}
    style={{ color: '#2f855a', cursor: 'pointer', fontWeight: 'bold' }}
  >
    Login here
  </span>
</p>

    </div>
  );
};

export default Register;
