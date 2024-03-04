
import React, { useState } from 'react';
import '/src/css/AuthPage.css';
import Navbar from '../components/Navbar';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      console.log(`Signing in with Email: ${email}, Password: ${password}`);
    } else {
      console.log(`Signing up with Email: ${email}, Phone Number: ${phoneNumber}, Password: ${password}`);
    }
  };

  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br>
    <div className="auth-container">
      <div className="toggle-buttons">
        <button onClick={handleToggleForm}>{isSignIn ? 'Sign Up' : 'Sign In'}</button>
      </div>
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isSignIn && (
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={phoneNumber} onChange={handlePhoneNumberChange} required />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
    </div>
  );
};

export default AuthPage;
