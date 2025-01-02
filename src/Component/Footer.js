import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo-description">
          {/* First div: Logo and Description */}
          <img src="logo/logo.png" alt="Logo" style={{backgroundColor:'#011625'}} />
          <p>Pushing the boundaries of peptide chemistry</p>
          <p className="bottom-text">Your trusted partner for quality peptides, delivered on time, every time!</p>
        </div>

        {/* Second div: Links */}
        <div className="footer-links">
          <ul className="nav flex-column">
            <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link text-white">About</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link text-white">Login</Link></li>
            <li className="nav-item"><Link to="/register" className="nav-link text-white">Register</Link></li>
          </ul>
        </div>

        {/* Third div: Additional Links */}
        <div className="footer-links">
          <ul className="nav flex-column">
            <li className="nav-item"><Link to="/services" className="nav-link text-white">Services</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
            <li className="nav-item"><Link to="/blog" className="nav-link text-white">Blog</Link></li>
            <li className="nav-item"><Link to="/faq" className="nav-link text-white">FAQ</Link></li>
            <li className="nav-item"><Link to="/case-study" className="nav-link text-white">Case Study</Link></li>
          </ul>
        </div>

        {/* Fourth div: Contact Info */}
        <div className="footer-contact-info">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><i className="fa fa-map-marker"></i>Galore Tx Pharmaceuticals, Bangalore Bioinnovation Centre, Electronics City Phase 1, Electronic City, Karnataka 56010</li>
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
