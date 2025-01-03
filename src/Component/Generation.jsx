
import React from 'react';
import labImage from '../img/syntheticc1.jpg'; // Replace with your actual image path
import '../Css/Synthetic_Chemicle.css'
import Header from './Header';
import t1 from '../img/t1.jpg';
import Footer from './Footer';

function Generation() {
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
    <div className="synthetic-chemical-container">
    <h3 className="heading-technology">Generation of Amino acid Inspired Small Molecules (AISM)</h3>
      <p className="paragraph-title">Concept clinically validated as inhibitors of protein-protein interactions</p>
      <div className="technology-container">

        <div className="content-wrapper">
          <img src={t1} alt="Technology" className="technology-image" />

        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Generation;
