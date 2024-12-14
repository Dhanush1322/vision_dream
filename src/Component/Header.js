import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      {/* Top Bar Section */}
      <section className="row top_bar">
        <div className="container">
          <div className="row m0">
            <div className="fleft schedule">
              <strong>
                <i className="fa fa-clock-o" /> Schedule
              </strong>
              : Monday - Saturday - 8:00 - 18:00, Sunday - 8:00 - 14:00
            </div>
            <div className="fright contact_info">
              <div className="fleft email">
                <img src="images/icons/envelope.jpg" alt="Email Icon" /> info@yourthemename.com
              </div>
              <div className="fleft phone">
                <i className="fa fa-phone" /> <strong>123 7890 456</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar Section */}
      <nav className="navbar navbar-default navbar-static-top navbar2" style={{ height: '85px' }}>
        <div className="container">
          <div className="navbar-header">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
              <img src="logo/logo.png" alt="Logo" style={{ width: '100px' }} />
            </Link>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className={`navbar-toggle ${isNavCollapsed ? 'collapsed' : ''}`}
              onClick={handleNavCollapse}
              aria-expanded={!isNavCollapsed}
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'in'}`}
            id="main_nav"
          >
            <ul className="nav navbar-nav navbar-right" style={{ paddingTop: '15px' }}>
              {/* Home Link */}
              <li>
                <Link to="/">Home</Link>
              </li>

              {/* About Dropdown */}
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle">
                  About
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about">About Glore TX</Link>
                  </li>
                  <li>
                    <Link to="/FounderAndLeadership">Founders </Link>
                  </li>
                  <li>
                    <Link to="/Leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link to="/Management">Management</Link>
                  </li>
                  <li>
                    <Link to="/Team">Team</Link>
                  </li>
                </ul>
              </li>

              {/* Services Dropdown */}
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/BusinessModule">Business Module</Link>
                  </li>
                  <li>
                    <Link to="/SymenticService">Semantic Service</Link>
                  </li>
                  <li>
                    <Link to="/DiscovoryService">Discovery Service</Link>
                  </li>
                </ul>
              </li>

              {/* Product and Contact Links */}
              <li>
                <Link to="/Technology">Technology</Link>
              </li>
               {/* Infrastructure  Dropdown */}
               <li className="dropdown">
                <Link to="#" className="dropdown-toggle">
                  Infrastructure
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Synthetic_Chemicle">Synthetic Chemistry</Link>
                  </li>
                  <li>
                    <Link to="/AnalyticleCapability">Analytical Capabilities</Link>
                  </li>
                  
                </ul>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/BookanAppointment">Book Appointment</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
