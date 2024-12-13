import React from 'react';
import t1 from '../img/t1.jpg';
import Header from './Header';
import Footer from './Footer';
import '../Css/Technology.css'; // Import the CSS file

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
     <Footer />
     </>
  );
}

export default Technology;
