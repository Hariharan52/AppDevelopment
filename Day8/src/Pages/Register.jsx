
import React, { useState } from 'react';
import '../Assets/Register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [mobliNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    nav('/login');
  }
    
  

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>REGISTER</h1>
        <label htmlFor="userName">User Name</label>
        <input type="text" placeholder="xxxx" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="userName" required />
        <label htmlFor="mobileNo">Mobile Number</label>
        <input type="text" placeholder="1234567890" value={mobliNo} onChange={(e) => setMobileNo(e.target.value)} name="mobileNo" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="************" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
        <button type="submit"  >Register</button>
        <div className='login-option'>
        <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default Register;