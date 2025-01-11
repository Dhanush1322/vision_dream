import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo-description">
          {/* First div: Logo and Description */}
          <img src="logo/galoticslogo.png" alt="Logo" style={{backgroundColor:'white',borderRadius:'20px',padding:'10px'}} />
          <p className="responsive-text-size-footer" style={{marginTop:'10px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Pushing the boundaries of peptide chemistry</p>
          <p className="bottom-text"  >Your trusted partner for quality peptides, delivered on time, every time!</p>
        </div>

        {/* Second div: Links */}
        <div className="footer-links">
          <ul className="nav flex-column">
            <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link text-white">About</Link></li>
            <li className="nav-item"><Link to="/FounderAndLeadership" className="nav-link text-white">Founder</Link></li>
            <li className="nav-item"><Link to="/Management" className="nav-link text-white">Management</Link></li>
            <li className="nav-item"><Link to="/Technology" className="nav-link text-white">Technology</Link></li>
          </ul>
        </div>

        {/* Third div: Additional Links */}
        <div className="footer-links">
          <ul className="nav flex-column">
            <li className="nav-item"><Link to="/BusinessModule" className="nav-link text-white">Business Model</Link></li>
            <li className="nav-item"><Link to="/SymenticService" className="nav-link text-white">Synthetic Service</Link></li>
            <li className="nav-item"><Link to="/DiscovoryService" className="nav-link text-white">Discovory Service </Link></li>
            <li className="nav-item"><Link to="/Synthetic_Chemicle" className="nav-link text-white">Synthetic Chemical</Link></li>
            <li className="nav-item"><Link to="/AnalyticleCapability" className="nav-link text-white">Analytical Capability</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul className="nav flex-column">
            <li className="nav-item"><Link to="/product" className="nav-link text-white">ScaleUp</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
            <li className="nav-item"><Link to="/BookanAppointment" className="nav-link text-white">Career@GaloreTx</Link></li>
            <li className="nav-item"><Link to="/case-study" className="nav-link text-white">Case Study</Link></li>
            {/* <li className="nav-item"><Link to="/login" className="nav-link text-white">Login</Link></li> */}

          </ul>
        </div>

        {/* Fourth div: Contact Info */}
        <div className="footer-contact-info">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li ><i className="fa fa-map-marker"></i>Galore Tx Pharmaceuticals, Bangalore Bioinnovation Centre, Electronics City Phase 1, Electronic City, Karnataka 56010</li>
            <li><i className="fa fa-envelope"></i>contact@galoretx.com</li>
            <li><i className="fa fa-phone"></i>9880258258</li>
          </ul>
        </div>
      </div>

      {/* Copyright and Designed By */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved | Designed by Bloom IT Solutions</p>
      </div>
    </footer>
  );
}

export default Footer;
