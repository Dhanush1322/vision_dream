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
              <h2>Business model</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="parentDiv">
        <div className="childDiv">
          <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Preferred service partner</h3>
          <img src={b1} alt="Business module layout" className="image" />
        </div>

        <div className="childDiv">
          <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Value added drug discovery services</h3>
          <img src={b2} alt="Business module example" className="image" />
        </div>
      </div>

      {/* Committed content section */}
      <div className="information">
        <p style={{ marginBottom: '15px' }}>
          Committed to efficiency and quality in delivering peptides with excellent synthetic and analytical capabilities gleaned from our collaborations with large pharma and biotech globally.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default BusinessModule;
