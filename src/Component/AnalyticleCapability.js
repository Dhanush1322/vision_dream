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
          <h2
          style={{
            marginBottom: '20px',
            width: '90%',  
            textAlign: 'left',
            padding: '15px',  
            borderRadius: '15px', 
            backgroundColor: '#f4f7f9',  
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  
            fontSize: '30px', 
            lineHeight: '1.6',  
            fontFamily: 'Arial, sans-serif', 
            borderLeft: '5px solid #145096' 
          }}
          >Instrumentation</h2>
          <ul>
            <li className="analytical">Analytical HPLCs</li>
            <li className="analytical">Preparative HPLCs</li>
            <li className="analytical">Mass Spectrometer</li>
          </ul>

          <h2
          style={{
            marginBottom: '20px',
            width: '90%',  
            textAlign: 'left',
            padding: '15px',  
            borderRadius: '15px', 
            backgroundColor: '#f4f7f9',  
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  
            fontSize: '30px', 
            lineHeight: '1.6',  
            fontFamily: 'Arial, sans-serif', 
            borderLeft: '5px solid #145096' 
          }}
          >Analytical R&D</h2>
          <ul>
            <li className="analytical">Analytical HPLC method development</li>
            <li className="analytical">Impurity analysis</li>
            
            
          </ul>
          <h2 
          style={{
            marginBottom: '20px',
            width: '90%',  
            textAlign: 'left',
            padding: '15px',  
            borderRadius: '15px', 
            backgroundColor: '#f4f7f9',  
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  
            fontSize: '30px', 
            lineHeight: '1.6',  
            fontFamily: 'Arial, sans-serif', 
            borderLeft: '5px solid #145096' 
          }}
          >Preparative scale HPLC purification</h2>
          <ul>
          <li className="analytical">10 mm to 50 mm HPLC column</li>
          <li className="analytical">Capability to carry out gram-scale purification</li>
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
