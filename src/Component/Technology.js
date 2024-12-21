import React from 'react';
import t1 from '../img/t1.jpg';
import Header from './Header';
import Footer from './Footer';
import '../Css/Technology.css'; // Import the CSS file
import symentic from '../img/symentic.jpg';

function Technology() {
  return (
    <>

    <Header />
     {/* Page Intro Section */}
     <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Technology</h2>
            </div>
          </div>
        </div>
      </section>
    <div className="technology-container">
     
      <div className="content-wrapper">
        <img src={t1} alt="Technology" className="technology-image" />
        <p className="technology-text">
          Expertise in converting peptide into amino acid inspired small molecules
        </p>
      </div>
     
    </div>
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

      <img src={symentic} alt="Symentic Service" style={{width:'90%'}} className="responsive-image" />

     <Footer />
     </>
  );
}

export default Technology;
