import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Css/SymenticService.css'; 
import symentic from '../img/symentic.jpg';

function SymenticService() {
  return (
    <>
      <Header />
      
      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="inner">
          <div className="container">
            <h2>Synthetic Service</h2>
          </div>
        </div>
      </section>

      {/* Content Section with 80% Width */}
      <div className="content-container">
        <p>
         1) Presence of distinct interface of PPIs involving the loops/strand sequences can be exploited in identifying peptides that mimic the native interaction interface.
        </p>
        <p>
        2) Native interaction pharmacophore identified by the reductionist approach comprising of less than 10 amino acids.
        </p>
        <p>
        3)  Conversion of linear peptides into peptidomimetics and further SAR optimization resulting in orally available amino acid-inspired small molecule inhibitors.
        </p>
      </div>

      <img src={symentic} alt="Symentic Service" className="responsive-image" />

      <Footer />
    </>
  );
}

export default SymenticService;
