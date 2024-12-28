import React from 'react';
import '../Css/Product.css'; // Add any CSS styles here
import Header from './Header';
import Footer from './Footer';
import c1 from '../img/c1.jpg'
import c2 from '../img/c2.jpg'
import c3 from '../img/c3.jpg'
import c4 from '../img/c4.jpg'
import scalupimage from '../img/galoticscaleup.png'
import galoticscupimage from '../img/galoticscupimage.png'

function Product() {
  return (
    <>
      <Header />
      <div className="product-container">

        <h2 className="scaleuptext">
          Process development and validation for Kilogram scale synthesis
        </h2>
        <div className="process-content">
          <ul>
            <li>Shortlisted unnatural amino acids</li>
            <li>Peptide building blocks</li>
            <li>Linkers</li>
            <li>Peptide fragments by avoiding preparative HPLC purification</li>
          </ul>
        </div>
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
        <h2 className="scaleuptext">
          Preparative HPLC was avoided and compound was purified by crystallization/precipitation techniquesDelivered 2 Kg of dipeptide using in-house developed process
        </h2>
      </div>
      <Footer />
    </>
  );
}

export default Product;
