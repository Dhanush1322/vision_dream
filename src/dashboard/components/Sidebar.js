import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTachometerAlt,  FaSignOutAlt, FaChevronRight, FaChevronDown, FaChartLine } from 'react-icons/fa'; // Import icons
import './Sidebar.css'; // Import CSS for styling
import Logo from '../../img/logo (1).png';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isDashboardOpen, setIsDashboardOpen] = useState(false); // Toggle state for Dashboard submenu
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false); // Toggle state for User Management submenu
  const [isTeamReportOpen, setIsTeamReportOpen] = useState(false); // Toggle state for Team Report submenu
  const [isFundManagementOpen, setIsFundManagementOpen] = useState(false); // Toggle state for Fund Management submenu
  const [isWithdrawalMenuOpen, setIsWithdrawalMenuOpen] = useState(false); // Toggle state for Withdrawal submenu
  const [isAdministrationMenuOpen, setIsAdministrationMenuOpen] = useState(false); // Toggle state for Administration submenu
  const [isHelpAndSupportOpen, setIsHelpAndSupportOpen] = useState(false); // Toggle state for HelpAndSupport submenu
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
                <Link to="/UserProfileAccess"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />User Profile Access</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/BlockUser"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Block User</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/UnblockUser"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />UnBlock User</Link>
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
                <Link to="/ActiveUser"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Active User</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/InactiveUser"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Inactive User</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/TotalUser"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Total User</Link>
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
                <Link to="/PendingFundRequest"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Pending Fund Request</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/ApprovedFundRequest"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Approved Fund Request</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/RejectedFundRequest"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Rejected Fund Request</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/FundConvertReport"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Fund Convert Report</Link>
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
                <Link to="/PendingWithdrawal"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Pending Withdrawal</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/PaidWithdrawal"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Paid Withdrawal</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/RejectedWithdrawal"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Rejected Withdrawal</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <div className="menu-header" onClick={() => setIsAdministrationMenuOpen(!isAdministrationMenuOpen)}>
            <FaTachometerAlt className="icon" />
            <div className='menu-header-right-box'>
              Administration
              {isAdministrationMenuOpen ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
            </div>
          </div>
          {isAdministrationMenuOpen && (
            <ul className="submenu">
              <li className='submenu-title'>
                <Link to="/NoticeUpdate"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Notice Update </Link>
              </li>
              <li className='submenu-title'>
                <Link to="/OutstandingBalance"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Outstanding Balance</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/UploadQrCode"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Upload Qr Code</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/BalanceAddDedut"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Balance Add /Deduct</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/BalanceHistory"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Banlance History</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/FundAddDedut"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Fund Add Deduct </Link>
              </li>
              <li className='submenu-title'>
                <Link to="/FundHistory"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Fund History</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/SliderImageUpload"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Slider Image Upload</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/WithdrawalOnOff"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Withdrawal On /Off</Link>
              </li>
              
            </ul>
          )}
        </li>
        {/* User Management Section with Toggle Submenu */}
        <li className="menu-item">
          <div className="menu-header" onClick={() => setIsHelpAndSupportOpen(!isHelpAndSupportOpen)}>
            <FaTachometerAlt className="icon" />
            <div className='menu-header-right-box'>
              Help And Support
              {isHelpAndSupportOpen ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
            </div>
          </div>
          {isHelpAndSupportOpen && (
            <ul className="submenu">
              <li className='submenu-title'>
                <Link to="/ComposeMessageAll"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Compose Message All</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/ComposeMessageSingle"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Compose Message Single</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/Inbox"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Inbox</Link>
              </li>
              <li className='submenu-title'>
                <Link to="/OutBox"><FaChartLine className="submenu-icon" style={{ marginRight: '10px' }} />Outbox</Link>
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
