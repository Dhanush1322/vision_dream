import React from 'react';
import Header from './Header';
import b1 from '../img/b1.jpg';
import b2 from '../img/b2.jpg';
import Footer from './Footer';
import '../Css/Businessmodule.css'; // Import the CSS file

function BusinessModule() {
  return (
    <>
      <Header />
      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2 style={{ textDecoration: 'none', textTransform: 'none' }}>Business model</h2>
            </div>
          </div>
        </div>
      </section>


      <div className="parentDiv">
        <div className="childDiv">
          <div className="bussinessage-module-text">
            <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Stand-alone services</span>
              <br />
              <span style={{ fontFamily: 'Inter', fontSize: '20px', color: '#145096' }}>Preferred service partner</span>
            </h3>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <i className="fa fa-thumbs-up" style={{ fontSize: '24px', color: '#145096' }}></i>
            </div>
          </div>

          <img src={b1} alt="Business module layout" className="image" />
        </div>

        <div className="childDiv">
          <div className="bussinessage-module-text">
            <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'san-serif' }}>Value added </span>
              <br />
              <span style={{ fontFamily: 'Inter', fontSize: '20px', color: '#145096' }}>drug discovery services</span>
            </h3>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <i className="fa fa-flask" style={{ fontSize: '24px', color: '#145096' }}></i>
            </div>
          </div>

          <img src={b2} alt="Business module example" className="image" />
        </div>
      </div>

      {/* Committed content section */}
      <div className="information">
        <p style={{
          marginBottom: '20px',
          width: '90%',  // Adjust width for better responsiveness
          marginInline: 'auto',
          textAlign: 'left',
          padding: '20px',  // Increased padding for more space around the text
          borderRadius: '15px',  // Rounded corners for a smoother appearance
          backgroundColor: '#f4f7f9',  // Light background for better readability
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow for a floating effect
          fontSize: '16px',  // Slightly larger text for readability
          lineHeight: '1.6',  // Improved line spacing
          color: '#333',  // Darker text color for better contrast
          fontFamily: 'Arial, sans-serif',  // Clean font style
          borderLeft: '5px solid #145096'  // Highlighted left border
        }}>
          Committed to efficiency and quality in delivering peptides with excellent synthetic and analytical capabilities gleaned from our collaborations with large pharma and biotech globally.
        </p>

      </div>

      <Footer />
    </>
  );
}

export default BusinessModule;
