import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('auth');

    // Redirect the user to the login page
    navigate('/Login');
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Admin</h2>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/DashboardPage">Dashboard</Link>
        </li>
        <li>
          <Link to="/EditPassword">Edit Password</Link>
        </li>
        <li>
          <Link to="/AddBanner">Add Banner</Link>
        </li>
        <li>
          <Link to="/AddProduct">Add Product</Link>
        </li>
        <li>
          <Link to="/Appointment">Appointment</Link>
        </li>
        <li onClick={handleLogout} className="logout-option">Logout</li> {/* Logout option */}
      </ul>
    </div>
  );
};

export default Sidebar;
