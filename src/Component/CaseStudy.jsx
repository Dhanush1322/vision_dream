
import React from 'react';
import labImage from '../img/syntheticc1.jpg'; // Replace with your actual image path
// import '../Css/Synthetic_Chemicle.css'
import Header from './Header';
import Footer from './Footer';
import scalupimage from '../img/galoticscaleup.png'
import galoticscupimage from '../img/galoticscupimage.png'
// import '../Css/Product.css'; // Add any CSS styles here


function CaseStudy() {
  return (
    <>
    <Header />
    {/* Page Intro Section */}
    <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Case  Study</h2>
            </div>
          </div>
        </div>
      </section>
      <h3 style={{textAlign:'center',color:'#0e7bbd',fontSize:'15px',fontWeight:'bolder',fontFamily:'unset'}}>GaloreTx Pharmaceuticals</h3>

      <div className="product-container">

      
      <h2 className="scaleuptext">
          Process optimization and kilogram scale manufacturing
        </h2>
        <p className="blackfont">Route optimization and scale up of Acyl amino acids</p>
        <div className="process-content">
          <ul>
            <li>Shortlisted unnatural amino acids</li>
            <li>Peptide building blocks</li>

          </ul>
        </div>
        <img src={scalupimage} alt="" className="scalupimage" />

        <p className="blackfont">Route optimization and manufacturing of dipeptide using acyl amino acids</p>
        <div className="process-content">
          <ul>
            <li>In-house process developed and optimized for the synthesis of dipeptides</li>

          </ul>
        </div>
        <img src={galoticscupimage} alt="" className="scalupimage" />
        <h2 className="scaleuptext" style={{fontSize:'22px'}}>
          Preparative HPLC was avoided and compound was purified by crystallization/precipitation techniques. <br/> <br/> Delivered multi-kilograms of dipeptide using in house developed process
        </h2>
        </div>
    <Footer />
    </>
  );
}

export default CaseStudy;
