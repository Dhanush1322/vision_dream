import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 0' }}>
      <div className="container">
        {/* Logo and Navigation Section */}
        <div className="row">
          <div className="col-md-5">
            <div className="footer_logo">
              <img src="logo/logo.png" alt="Logo" style={{ width: '120px', marginBottom: '20px' }} />
            </div>
            <p>
              Your trusted partner for medical solutions. Providing high-quality services for your healthcare needs.
            </p>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-sm-4">
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Services</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Doctors</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Department</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Pages</a></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#" className="nav-link text-white">Blog</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Contact</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Shop</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">FAQ</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Shortcodes</a></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#" className="nav-link text-white">Terms & Conditions</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Privacy Policy</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Legal Disclaimer</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-white">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fa fa-map-marker" style={{ marginRight: '10px' }}></i>Area 51, Some near unknown, USA 000000</li>
              <li className="mb-2"><i className="fa fa-envelope" style={{ marginRight: '10px' }}></i>info@medicalprotheme.com</li>
              <li><i className="fa fa-phone" style={{ marginRight: '10px' }}></i>123 7890 456</li>
            </ul>
          </div>
          <div className="col-md-6 text-md-right">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-linkedin"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-pinterest"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="fa fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col-md-6">
            <p>&copy; 2024 Glore TX All rights reserved</p>
          </div>
          <div className="col-md-6 text-md-right">
            <p>Designed by <a href="#" className="text-white">Bloom IT Solutions</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
