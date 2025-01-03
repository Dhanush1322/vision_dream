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
      <h3 style={{textAlign:'center',color:'#0e7bbd',fontSize:'15px',fontWeight:'bolder',fontFamily:'unset'}}>GaloreTx Pharmaceuticals</h3>

    <div className="synthetic-chemical-container">
      <div className="left-content">
        <h2>Infrastructure</h2>
        <ul>
          <li>Well furnished labs with chemical hoods</li>
          <li>Analytical instruments</li>
          <li>Lyophilizers</li>
        </ul>

        <h2>Scale of Synthesis</h2>
        <ul>
          <li>Scale ranging from milligram to multi-gram quantities,with the possibility of further expansion subject to feasibility assessments</li>
          <li>Process optimization and technology transfer for manufacturing : non GMP to GMP</li>
          <li>Capability to carry out Multi-kilogram scale peptidomimetics manufacturing</li>
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
