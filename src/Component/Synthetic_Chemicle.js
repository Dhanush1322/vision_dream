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
        <h2>Infrastructure</h2>
        <ul>
          <li>Well furnished labs with chemical hoods</li>
          <li>Analytical instruments</li>
          <li>Lyophilizers</li>
        </ul>

        <h2>Scale of Synthesis</h2>
        <ul>
          <li>Milligram to multi-gram scale synthesis of peptides (with feasibility of further scale-up to 500 grams)</li>
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
