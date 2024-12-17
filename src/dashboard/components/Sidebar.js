import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTachometerAlt, FaKey, FaImage, FaProductHunt, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa'; // Import icons
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
          <Link to="/DashboardPage">
            <FaTachometerAlt className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/EditPassword">
            <FaKey className="icon" /> Edit Password
          </Link>
        </li>
        <li>
          <Link to="/AddBanner">
            <FaImage className="icon" /> Add Banner
          </Link>
        </li>
        <li>
          <Link to="/UpdateBanner">
            <FaImage className="icon" /> Update Banner
          </Link>
        </li>
        <li>
          <Link to="/AddProduct">
            <FaProductHunt className="icon" /> Add Product
          </Link>
        </li>
        <li>
          <Link to="/Appointment">
            <FaCalendarAlt className="icon" /> Appointment
          </Link>
        </li>
        <li onClick={handleLogout} className="logout-option">
          <FaSignOutAlt className="icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
