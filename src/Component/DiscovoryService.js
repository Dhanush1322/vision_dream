import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Css/DiscovoryService.css'; // Import the CSS file

function DiscovoryService() {
  return (
    <>
      <Header />
      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Discovory Service</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="content-container">
  <h3 style={{ fontSize: '3rem' }}>
    Stabilization of Identified “Hit or Lead” Peptides
  </h3>
  <p style={{ fontSize: '2rem' }}>
    For improving potency, plasma stability, and bioavailability, we employ various strategies, including:
  </p>
  <ul className="content-list" style={{ fontSize: '2rem' }}>
    <li>Ala Scan</li>
    <li>Lactam Scan</li>
    <li>Disulfide Scan</li>
    <li>Identification of Metabolic Hot Spots</li>
    <li>Incorporation of D-Amino Acid</li>
    <li>Reduced Amide Bond Scan</li>
    <li>Incorporation of N-Methyl Amino Acids</li>
    <li>Macrocyclization Strategies</li>
    <li>Incorporation of Peptoid Units</li>
  </ul>
</div>


      <Footer />
    </>
  );
}

export default DiscovoryService;
