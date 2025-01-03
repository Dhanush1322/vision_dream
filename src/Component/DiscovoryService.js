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
      <h3 style={{textAlign:'center',color:'#0e7bbd',fontSize:'15px',fontWeight:'bolder',fontFamily:'unset'}}>GaloreTx Pharmaceuticals</h3>


      {/* Content Section */}
      <div className="content-container">
        <h3 style={{ fontSize: '3rem' }}>
          Stabilization of identified “Hit or Lead”  peptides for improving potency, plasma stability and bioavailability   </h3>

        <ul className="content-list" style={{ fontSize: '2rem' }}>
          <li>Ala Scan</li>
          <li>Lactam Scan</li>
          <li>Disulfide Scan</li>
        </ul>
        <h3 style={{ fontSize: '3rem' }}>
        Stabilization of identified metabolic hot spots
          </h3>

        <ul className="content-list" style={{ fontSize: '2rem' }}>
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
