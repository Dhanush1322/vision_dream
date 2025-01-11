import React from 'react';
import labImage from '../img/syntheticc1.jpg'; // Replace with your actual image path
import '../Css/Synthetic_Chemicle.css'
import Header from './Header';
import Footer from './Footer';

function Synthetic_Chemical() {
  return (
    <>
    <Header />
    {/* Page Intro Section */}
    <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Synthetic Chemical</h2>
            </div>
          </div>
        </div>
      </section>
 
    <div className="synthetic-chemical-container">
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
        >Infrastructure</h2>
        <ul>
          <li className="synthetichemicalddlist">Well furnished labs with chemical hoods</li>
          <li className="synthetichemicalddlist">Analytical instruments</li>
          <li className="synthetichemicalddlist">Lyophilizers</li>
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
        >Scale of Synthesis</h2>
        <ul>
          <li className="synthetichemicalddlist">Scale ranging from milligram to multi-gram quantities,with the possibility of further expansion subject to feasibility assessments</li>
          <li className="synthetichemicalddlist">Process optimization and technology transfer for manufacturing : non GMP to GMP</li>
          <li className="synthetichemicalddlist">Capability to carry out Multi-kilogram scale peptidomimetics manufacturing</li>
        </ul>
      </div>

      <div className="right-image">
        <img src={labImage} alt="Lab Infrastructure" />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Synthetic_Chemical;
