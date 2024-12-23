import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../Css/Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
<Header/>
 {/* Page Intro Section */}
 <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h5>Contact Us</h5>
              <h2>Get in touch with Doctor</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <section className="row breadcrumbRow">
        <div className="container">
          <div className="row inner m0">
            <ul className="breadcrumb">
              <li><Link to='/'>Home</Link>

              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-section">
  {/* Left Side: Contact Info */}
  <div className="left">
    <h3>Get in Touch</h3>
    <div className="info">
  <i className="fa fa-envelope" />
  <span>contact@galoretx.com</span>
</div>
<div className="info">
  <i className="fa fa-phone" style={{ color: "#48bb78" }} />
  <span>9880258258</span>
</div>
<div className="info">
  <i className="fa fa-map-marker" style={{ color: "#f56565" }} /> {/* red color */}
  <span>Galore Tx Pharmaceuticals, Bangalore Bioinnovation Centre, Electronics City Phase 1, Electronic City, Karnataka 56010</span>
</div>

  </div>
  {/* Right Side: Google Map */}
  <div className="right">
    <h3>Our Location</h3>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.9537353153168!3d-37.81627997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775dff46e97e2!2sArea%2051%2C%20Some%20near%20unknown%2C%20USA%20000000!5e0!3m2!1sen!2sin!4v1696866108577!5m2!1sen!2sin"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  </div>
</section>


<Footer/>

    </div>
  )
}

export default Contact