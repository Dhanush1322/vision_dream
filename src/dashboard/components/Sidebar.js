import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTachometerAlt, FaKey, FaImage, FaProductHunt, FaCalendarAlt, FaSignOutAlt, FaChevronRight, FaChevronDown, FaChartLine } from 'react-icons/fa'; // Import icons
import './Sidebar.css'; // Import CSS for styling
import Logo from '../../img/logo (1).png';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isDashboardOpen, setIsDashboardOpen] = useState(false); // Toggle state for Dashboard submenu
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false); // Toggle state for User Management submenu
  const [isTeamReportOpen, setIsTeamReportOpen] = useState(false); // Toggle state for Team Report submenu
  const [isFundManagementOpen, setIsFundManagementOpen] = useState(false); // Toggle state for Fund Management submenu
  const [isWithdrawalMenuOpen, setIsWithdrawalMenuOpen] = useState(false); // Toggle state for Withdrawal submenu

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Remove the token from localStorage
    navigate('/Login'); // Redirect to login page
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src={Logo} width={100} />
      </div>
      <ul className="sidebar-links">
        {/* Dashboard Section with Toggle Submenu */}
        <li className="menu-item">
          <div className="menu-header" onClick={() => setIsDashboardOpen(!isDashboardOpen)}>
            <FaTachometerAlt className="icon" />
            <div className='menu-header-right-box'>
              Dashboard
              {isDashboardOpen ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
            </div>
          </div>
          {isDashboardOpen && (
            <ul className="submenu">
              <li className='submenu-title'>
                <Link to="/DashboardPage"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Home</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/EditPassword"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Change Password</Link>
              </li>
            </ul>
          )}
        </li>

        {/* User Management Section with Toggle Submenu */}
        <li className="menu-item">
          <div className="menu-header" onClick={() => setIsUserManagementOpen(!isUserManagementOpen)}>
            <FaTachometerAlt className="icon" />
            <div className='menu-header-right-box'>
              User Management
              {isUserManagementOpen ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
            </div>
          </div>
          {isUserManagementOpen && (
            <ul className="submenu">
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />User Profile Access</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Block User</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />UnBlock User</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Team Report Section with Toggle Submenu */}
        <li className="menu-item">
          <div className="menu-header" onClick={() => setIsTeamReportOpen(!isTeamReportOpen)}>
            <FaTachometerAlt className="icon" />
            <div className='menu-header-right-box'>
              Team Report
              {isTeamReportOpen ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
            </div>
          </div>
          {isTeamReportOpen && (
            <ul className="submenu">
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Active User</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Inactive User</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Total User</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Fund Management Section with Toggle Submenu */}
        <li className="menu-item">
          <div className="menu-header" onClick={() => setIsFundManagementOpen(!isFundManagementOpen)}>
            <FaTachometerAlt className="icon" />
            <div className='menu-header-right-box'>
              Fund Management
              {isFundManagementOpen ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
            </div>
          </div>
          {isFundManagementOpen && (
            <ul className="submenu">
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Pending Fund Request</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Approved Fund Request</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Rejected Fund Request</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Fund Convert Report</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Withdrawal Menu Section with Toggle Submenu */}
        <li className="menu-item">
          <div className="menu-header" onClick={() => setIsWithdrawalMenuOpen(!isWithdrawalMenuOpen)}>
            <FaTachometerAlt className="icon" />
            <div className='menu-header-right-box'>
              Withdrawal Menu
              {isWithdrawalMenuOpen ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
            </div>
          </div>
          {isWithdrawalMenuOpen && (
            <ul className="submenu">
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Pending Withdrawal</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Paid Withdrawal</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Rejected Withdrawal</Link>
              </li>
            </ul>
          )}
        </li>

        <li onClick={handleLogout} className="logout-option">
          <FaSignOutAlt className="icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
