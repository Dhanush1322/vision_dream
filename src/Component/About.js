import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import xImage from '../banner/x.jpg';

function About() {
  return (
    <div>
      <Header />

      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">

              <h2>About US</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <section className="row breadcrumbRow">
        <div className="container">
          <div className="row inner m0">
            <ul className="breadcrumb" style={{ fontSize: '16px', fontWeight: '600' }}>
              <li><Link to="/" style={{ color: '#0072a0' }}>Home</Link></li>
              <li style={{ color: '#333' }}>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="row who_depts" style={{ padding: '0px 0' }}>
        <div className="container">
          <div className="row">
            {/* Who We Are Content */}
            <div className="col-sm-12 col-md-8 who_weR">
              <div className="row m0 titleRow text-left">
                <h5 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0072a0' }}>Who We Are</h5>
                <h2 style={{ fontSize: '38px', fontWeight: '700', color: '#333' }}>About GaloreTx®</h2>
              </div>
              <div className="media">
                <div className="media-left">
                  <span>
                    <img
                      src={xImage}
                      alt="About GaloreTx"
                      style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                    />
                  </span>
                </div>
                <div className="media-body">

                  <p style={{ fontSize: '18px', fontWeight: '500', color: '#555', lineHeight: '1.6' }}>
                    At GaloreTx®, we leverage our extensive expertise in peptide chemistry to revolutionize drug discovery and development. Through innovative synthesis techniques and cutting-edge amino acid-inspired design strategies, we collaborate with our partners to advance peptide science
                    <br /><br />
                    We are a dedicated team tirelessly working to deliver complex peptides and peptidomimetics to renowned academic,
                    biotech, and pharma partners globally.
                  </p>
                  <Link
                    to="/BookanAppointment"
                    className="view_all"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#fff',
                      backgroundColor: '#0072a0',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none'
                    }}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Our Departments Section */}
            <div className="col-sm-12 col-md-4 our_depts_list">
              <div className="row m0 titleRow text-left">
                <h5 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0072a0' }}>Variety of Services</h5>
                <h2 style={{ fontSize: '38px', fontWeight: '700', color: '#333' }}>Our Departments</h2>
              </div>
              <ul className="list-unstyled depts_list" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> General Health Care</span></li>
                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Rehabilitation Center</span></li>
                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Cancer Care</span></li>
                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Cardiac Clinic</span></li>
                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Neurology</span></li>
                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Dental Care</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
