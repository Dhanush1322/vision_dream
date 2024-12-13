import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo-description">
          {/* First div: Logo and Description */}
          <img src="logo/logo.png" alt="Logo" />
          <p>Your trusted partner for medical solutions. Providing high-quality services for your healthcare needs.</p>
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
          </ul>
        </div>

        {/* Fourth div: Contact Info */}
        <div className="footer-contact-info">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><i className="fa fa-map-marker"></i>Area 51, Some near unknown, USA 000000</li>
            <li><i className="fa fa-envelope"></i>info@medicalprotheme.com</li>
            <li><i className="fa fa-phone"></i>123 7890 456</li>
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
