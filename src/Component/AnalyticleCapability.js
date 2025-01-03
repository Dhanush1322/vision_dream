import React from 'react';
import labImage from '../img/anyliticle.jpg'; // Replace with your actual image path
import '../Css/AnalyticleCapability.css';
import Header from './Header';
import Footer from './Footer';

function AnalyticleCapability() {
  return (
    <>
      <Header />
      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Analytical Capability</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="synthetic-chemical-container">
        {/* Left Content Section */}
        <div className="left-content">
          <h2>Instrumentation</h2>
          <ul>
            <li>Analytical HPLCs</li>
            <li>Preparative HPLCs</li>
            <li>Mass Spectrometer</li>
          </ul>

          <h2>Analytical R&D</h2>
          <ul>
            <li>Analytical HPLC method development</li>
            <li>Impurity analysis</li>
            
            
          </ul>
          <h2>Preparative scale HPLC purification</h2>
          <ul>
          <li>10 mm to 50 mm HPLC column</li>
          <li>Capability to carry out gram-scale purification</li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="right-image">
          <img src={labImage} alt="Lab Infrastructure" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AnalyticleCapability;
