import React, { useState } from 'react';
import '../Css/Login.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState(''); // Changed from userId to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear any previous error message
    setIsLoading(true); // Show loader when submitting form

    try {
      // Make API call to the new endpoint
      const response = await fetch('https://host-rl4ol.ondigitalocean.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Updated fields for API compatibility
      });

      const data = await response.json();
      if (response.ok) {
        // Successful login: Store token and navigate to dashboard
        localStorage.setItem('auth', data?.token);
        navigate('/DashboardPage'); // Replace with your dashboard route
      } else {
        // Display error message from API
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      // Handle network or unexpected errors
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false); // Hide loader after operation
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>} {/* Display error message */}
          
          {/* Display loader if form is being submitted */}
          {isLoading && <div className="loader"></div>} {/* Loader component */}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label> {/* Updated label */}
              <input
                type="text"
                id="username"
                placeholder="Enter your Username" // Updated placeholder
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update state
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
