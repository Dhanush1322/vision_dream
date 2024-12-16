import React, { useState } from 'react';
import '../Css/Login.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');

    try {
      const response = await fetch('https://walrus-app-seuz8.ondigitalocean.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
      });

      const data = await response.json();
      if (response.ok) {
          localStorage.setItem('auth',data?.token)
        // Successful login: Navigate to the dashboard
        navigate('/DashboardPage'); // Replace with your dashboard route
      } else {
        // Display error message from API
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      // Handle network or other unexpected errors
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                placeholder="Enter your User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)} // Update state
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
