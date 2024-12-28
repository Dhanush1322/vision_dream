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
        <div className="inner" id="innertwo">
          <div className="container">
            <h2>Synthetic Service</h2>
          </div>
        </div>
      </section>

      {/* Content Section with 80% Width */}
      <div className="content-container">
        <p className="contin-text">
          We are highly specialized and experienced in the synthesis of various peptide designs. We provide quality peptides with detailed characterization and Certificate of Analysis.  Partner with us and get quality peptides on time for ALL YOUR PEPTIDE NEEDS
        </p>
        <ul>
          <li>Branched peptides</li>
          <li>Conformationally constrained cyclic peptides</li>
          <li>Cysteine rich peptides: Toxins</li>
          <li>Cyclic thioethers</li>
          <li>Peptide chain dimers</li>
          <li>Cyclic peptides by click chemistry, stapling, and RCM</li>
          <li>Labelled peptides</li>
          <li>Derivatized peptides</li>
          <li>Synthesis of long chain linkers</li>
          <li>Peptide combinatorial libraries</li>
          <li>Peptoids</li>
          <li>Peptidomimetics</li>
        </ul>

      </div>

      {/* <img src={symentic} alt="Symentic Service" className="responsive-image" /> */}

      <Footer />
    </>
  );
}

export default SymenticService;
