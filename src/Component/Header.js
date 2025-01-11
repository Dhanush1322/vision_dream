import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  let styles={
    navLink: {
      color: 'black',
      padding: '10px 15px',
      textTransform: 'none',
      fontSize:'13px',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'color 0.3s, background-color 0.3s',
    },
    navLinkHover: {
      backgroundColor: '#495057',
      color: '#ffc107',
    },
  }

  return (
    <>
      {/* Top Bar Section */}
     
      {/* <section className="row top_bar">
        <div className="container">
          <div className="row m0">
            <div className="fleft schedule">
              <strong>
                <i className="fa fa-clock-o" /> Schedule
              </strong>
              : Monday - Friday - 8:00 - 18:00
            </div>
            <div className="fright contact_info">
              <div className="fleft email">
                <img src="images/icons/envelope.jpg" alt="Email Icon" /> <span style={{  color: '#0072a0', fontWeight: 'bold', padding: '2px 4px' }}>
    contact@galoretx.com
  </span>
              </div>
              <div className="fleft phone">
                <i className="fa fa-phone" /> <strong>9880258258</strong>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Navigation Bar Section */}
      <nav className="navbar navbar-default navbar-static-top navbar2" style={{ height: '90px',backgroundColor:'white' }}>
        <div className="container" style={{ width: '98%',backgroundColor:'white',height:'90px' }}>
          <div className="navbar-header" style={{ backgroundColor: 'white' }}>
            {/* Logo */}
            <Link to="/" className="navbar-brand">
              <img src="logo/logo.png" alt="Logo" style={{ width: '230px',background: 'transparent' }} />
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
          style={{backgroundColor:'white'}}
            className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'in'}`}
            id="main_nav"
          >
            <ul className="nav navbar-nav navbar-right" style={{ paddingTop: '15px' }}>
              {/* Home Link */}
              <li>
                <Link to="/" style={styles.navLink}><i className="fa fa-home" style={{ marginRight: '2px' }} /> Home</Link>
              </li>

              {/* About Dropdown */}
              <li className="dropdown">
                <Link to="#" style={styles.navLink}  className="dropdown-toggle">
                <i className="fa fa-info-circle" style={{ marginRight: '2px' }} /> About
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about" ><i className="fa fa-info" style={{ marginRight: '4px' }} /> About Galore Tx</Link>
                  </li>
                  <li>
                    <Link to="/FounderAndLeadership"><i className="fa fa-user" style={{ marginRight: '4px' }} /> Founders </Link>
                  </li>
                  {/* <li>
                    <Link to="/Leadership">Leadership</Link>
                  </li> */}
                  <li>
                    <Link to="/Management"><i className="fa fa-briefcase" style={{ marginRight: '4px' }} />Management</Link>
                  </li>
                  <li>
                    <Link to="/Team"><i className="fa fa-users" style={{ marginRight: '4px' }} /> Team</Link>
                  </li>
                </ul>
              </li>

              {/* Services Dropdown */}
              <li className="dropdown">
                <Link to="#" style={styles.navLink} className="dropdown-toggle">
                <i className="fa fa-cogs" style={{ marginRight: '2px' }} /> Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/BusinessModule"><i class="fa fa-briefcase" style={{ marginRight: '8px' }}/> Business Model</Link>
                  </li>
                  <li>
                    <Link to="/SymenticService"><i className="fa fa-flask" style={{ marginRight: '8px' }} /> Synthetic Service</Link>
                  </li>
                  <li>
                    <Link to="/DiscovoryService"><i className="fa fa-search" style={{ marginRight: '8px' }} /> Discovery Service</Link>
                  </li>
                </ul>
              </li>

              {/* Product and Contact Links */}
              <li>
                <Link style={styles.navLink} to="/Technology"> <i className="fa fa-laptop" style={{ marginRight: '2px' }} /> Technology</Link>
              </li>
               {/* Infrastructure  Dropdown */}
               <li className="dropdown">
                <Link to="#" style={styles.navLink} className="dropdown-toggle">
                <i className="fa fa-building" style={{ marginRight: '2px' }} /> Infrastructure
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Synthetic_Chemicle"> <i className="fa fa-flask" style={{ marginRight: '8px' }} /> Synthetic Chemistry</Link>
                  </li>
                  <li>
                    <Link to="/AnalyticleCapability"><i class="fa fa-bar-chart" style={{ marginRight: '8px' }}/> Analytical Capabilities</Link>
                  </li>
                  
                </ul>
              </li>
              <li>
                <Link style={styles.navLink} to="/product"> <i class="fa fa-bar-chart" style={{ marginRight: '2px' }}/>                ScaleUp</Link>
              </li>
              <li>
                <Link style={styles.navLink} to="/contact"> <i className="fa fa-envelope" style={{ marginRight: '2px' }} /> Contact</Link>
              </li>
              <li>
                <Link style={styles.navLink} to="/BookanAppointment"> <i className="fa fa-calendar" style={{ marginRight: '2px' }} /> Career@GaloreTx</Link>
              </li>
              
              {/* <li>
                <Link style={styles.navLink} to="/Login"> <i className="fa fa-sign-in" style={{ marginRight: '2px' }} />Login</Link>
              </li> */}
              
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Header;
