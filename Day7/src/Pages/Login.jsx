
import React, { useState } from 'react';
import '../Assets/Login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      setError('Invalid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError('');
    
    dispatch(login(email)); 
    nav('/');
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>LOGIN</h1>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor='email'>Email</label>
        <input type="email" placeholder='abc@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} name='email' required />
        <label htmlFor='password'>Password</label>
        <input type="password" placeholder='************' value={password} onChange={(e) => setPassword(e.target.value)} name='password' required/>
        <button type='submit'>Login</button>
        <p>Don't have an account?</p>
        <div className="register-option">
          <Link to="/register">Register here</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
